<template>
  <div style="height: 100vh" class="d-flex flex-column flex-grow-1">
    <!-- insert avatar and navbar -->
    <!-- consider making own component -->
    <!-- <v-row
          v-if="$vuetify.breakpoint.xs"
          class="pl-2 pb-1"
          align="center"
          no-gutters
        > -->
    <v-row
      align="center"
      no-gutters
      class="pl-3 pt-0 pb-0"
      style="height: 52px"
    >
      <v-btn
        v-if="$vuetify.breakpoint.smAndDown"
        icon
        color="#008de4"
        class="mt-n1"
        @click="$router.go(-1)"
        ><v-icon>mdi-arrow-left</v-icon></v-btn
      >
      <span class="font-header pa-0 mt-n1">
        <v-list-item two-line>
          <nuxt-link :to="'/' + 'drummer'">
            <v-list-item-avatar color="lightgray" size="31" class="mr-2">
              <v-img
                class="elevation-6"
                :src="getProfile(chatPartnerUserName).avatar"
              ></v-img> </v-list-item-avatar
          ></nuxt-link>
          <v-list-item-content class="py-2">
            <v-list-item-title>
              <span style="font-weight: bold; font-size: 19px">
                {{ chatPartnerUserName }}
              </span>
            </v-list-item-title>
            <v-list-item-subtitle
              style="color: #757575; font-size: 12px; margin-left: 1px"
            >
              {{ `@${chatPartnerUserName}` }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </span>
    </v-row>
    <v-divider />
    <div
      id="scrollcontainer"
      style="
        height: 100%;
        overflow-y: scroll;
        flex-shrink: 1;
        flex-direction: column-reverse;
        display: flex;
      "
    >
      <div>
        <v-row
          v-for="(message, idx) in getDirectMessages(chatPartnerUserId)"
          :key="idx"
          no-gutters
          :justify="amIMessageSender(message) ? 'end' : 'start'"
        >
          <v-card
            class="mt-1 px-4 py-2 mr-4"
            :class="{
              chatPartnerBubble: !amIMessageSender(message),
              meBubble: amIMessageSender(message),
            }"
            elevation="0"
            outlined
            color="lightgrey"
            style="
              line-height: 1.2em;
              font-size: 16px;
              display: flex !important;
              flex-direction: column;
            "
          >
            <div
              v-linkified:options="{ className: 'linkify' }"
              v-html="message.encMessage"
            />
          </v-card>
        </v-row>
      </div>
    </div>
    <v-row no-gutters align="center" class="flex-nowrap messageinput py-2 mt-2">
      <v-text-field
        v-model="directMessageText"
        :disabled="isSendingReplyMessage"
        class="px-2"
        rounded
        filled
        dense
        placeholder="Start a new message"
        hide-details=""
        @keydown.enter="enterPress"
      /><v-btn
        :loading="isSendingReplyMessage"
        icon
        class="mr-1"
        @click="sendDirectMessageWrapper"
        ><v-icon color="#008de4"> mdi-send </v-icon>
      </v-btn>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Vue from 'vue'
import linkify from 'vue-linkify'

Vue.directive('linkified', linkify)

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export default {
  data() {
    return {
      isSendingReplyMessage: false,
      messages: [],
      directMessageText: '',
      lastTimeCheckedReceived: 0,
      lastTimeCheckedSent: 0,
      chatPartnerUserName: '',
      chatPartnerUserId: '',
    }
  },
  computed: {
    ...mapGetters(['getJams', 'getProfile', 'getDirectMessages']),
  },
  async created() {
    this.chatPartnerUserName = this.$route.params.userName
    if (this.chatPartnerUserName) {
      // TODO show snack error / redirect if user isn't signed up to jembe
      this.chatPartnerUserId = (
        await this.resolveUsername(this.chatPartnerUserName)
      ).$id

      this.fetchDirectMessagesLoop()
    }
  },
  methods: {
    ...mapActions([
      'fetchDirectMessages',
      'resolveUsername',
      'sendDirectMessage',
    ]),
    enterPress(event) {
      // TODO use text-area and add linebreaks to messages
      if (event.shiftKey === true) {
        this.directMessageText = this.directMessageText + '\n\r'
      } else {
        this.sendDirectMessageWrapper()
      }
    },
    amIMessageSender(message) {
      return message.senderUserId === this.$store.state.name.userId
    },
    sendDirectMessageWrapper() {
      const {
        directMessageText,
        chatPartnerUserName,
        chatPartnerUserId,
        sendDirectMessage,
      } = this

      // Don't send an empty message
      if (directMessageText === '') return

      // this.isSendingReplyMessage = true

      this.directMessageText = ''

      sendDirectMessage({
        directMessageText,
        chatPartnerUserId,
        chatPartnerUserName,
      })

      // this.isSendingReplyMessage = false
    },
    async fetchDirectMessagesLoop() {
      await this.fetchDirectMessages()

      await sleep(1000)

      this.fetchDirectMessagesLoop()
    },
  },
}
</script>

<style scoped>
a.linkify {
  color: #03619c !important;
  text-decoration: none !important;
}
a.linkify :hover {
  text-decoration: underline !important;
}

.headerbar {
  /* position: sticky; */
  /* top: 0; */
  height: 54px;
  background-color: white;
  border-bottom: solid 1px;
  border-bottom-color: lightgray;
}
.messageinput {
  border-top: solid 1px;
  border-top-color: lightgray;
}
.chatPartnerBubble {
  background-color: #ece9e9;
  border-radius: 15px 15px 15px 0px;
  font-weight: 410;
  margin-left: 48px;
}
.meBubble {
  background-color: #008de4;
  color: white;
  border-radius: 15px 15px 0px 15px;
  font-weight: 410;
}
</style>
