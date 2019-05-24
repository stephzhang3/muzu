const start_state = "intro";

const states = [
  {
    name: "intro"
  },
  {
    name: "stuck"
  },
  {
    name: "challenged"
  },
  {
    name: "bored"
  },
  {
    name: "unstuck"
  },
  {
    name: "brain_points"
  }
];

const transitions = [
  {
    name: "figured_out"
  },
  {
    name: "got_confused"
  }
];

const dialogues = [
  {
    type: "intro",
    dialogue: [
      {
        speaker: "bot",
        content: `Hi! My name is Muzu!`
      },
      {
        speaker: "bot",
        content: `I'm here to support you as you create AMAZING things!`
      },
      {
        speaker: "bot",
        content: `What is your name?`
      },
      {
        speaker: "human",
        input: {
          variable: "name",
          placeholder: "Your name"
        }
      },
      {
        speaker: "bot",
        content: `Nice to meet you {{=name}}! What are you hoping to create in Scratch today?`
      },
      {
        speaker: "bot",
        variable: "project",
        buttons: [
          {
            text: `Story`,
            value: "story"
          },
          {
            text: `Game`,
            value: "game"
          },
          {
            text: `Animation`,
            value: "animation"
          },
          {
            text: `Other`,
            value: "other",
            type: "input"
          }
        ]
      },
      {
        speaker: "bot",
        content: `Wow, a {{=project}}, that sounds like fun!`
      },
      {
        speaker: "bot",
        content: `Do you need any help starting your {{=project}}, {{=name}}?`
      },
      {
        speaker: "human",
        variable: "needHelpStart",
        buttons: [
          {
            text: `Yes, please!`,
            value: "yes"
          },
          {
            text: `Nope!`,
            value: "no"
          }
        ]
      },
      {
        speaker: "bot",
        content: `Alright! One way to start is by watching a tutorial`
      },
      {
        speaker: "bot",
        content: `To do that, scroll up to the top of the page and click on the "Tutorials" toolbar!`
      },
      {
        speaker: "human",
        variable: "needHelpStart",
        buttons: [
          {
            text: `Got it! I'm there!`,
            value: "yes"
          }
        ]
      },
      {
        speaker: "bot",
        content: `Amazing! Do any seem relevant to making your {{=project}}!`
      },
      {
        speaker: "bot",
        content: `Feel free to click on and watch whichever seems helpful!`
      },
      {
        speaker: "human",
        variable: "needHelpStart",
        buttons: [
          {
            text: `Sounds good, I've finished watching!`,
            value: "yes"
          }
        ]
      },
      {
        speaker: "bot",
        content: `Good to hear!`
      },
      {
        speaker: "bot",
        content: `Did you think that the tutorial was helpful, {{=name}}?`
      },
      {
        speaker: "human",
        variable: "needHelpStart",
        buttons: [
          {
            text: `Yes!`,
            value: "yes"
          },
          {
            text: `Nope!`,
            value: "no"
          }
        ]
      },
      {
        speaker: "bot",
        content: `So glad to hear that!`
      },
      {
        speaker: "bot",
        content: `You just added a new tool to your "getting unstuck" toolbar: watching a tutorial!`
      },
      {
        speaker: "bot",
        content: `The next time you get stuck, feel free to try watching a tutorial. :)`
      },
      {
        speaker: "bot",
        content: `That's all for now {{=name}}, feel free to chat whenever!`
      },
      {
        speaker: "bot",
        content: `Happy programming!`
      }

      // {
      //   speaker: "bot",
      //   content: `I don't know how to program myself, but will try to help you as you make your {{=project}}!`
      // },
      // {
      //   speaker: "bot",
      //   content: `Feel free to click on our chat box whenever`
      // },
      // {
      //   speaker: "bot",
      //   content: `Happy programming, {{=name}}!`
      // }
    ]
  },
  {
    type: "confused",
    dialogue: [
      {
        speaker: "bot",
        content: `Sorry to hear that you're confused. But when you're confused, that's when you can learn the most! What are you confused about?`
      },
      {
        speaker: "human",
        input: {
          variable: "current_project"
        }
      },
      {
        speaker: "bot",
        content: `Yes, that does sound challenging. Hm... maybe you can try some of these tips!`
      },
      {
        speaker: "bot",
        variable: "topic",
        buttons: [
          {
            text: `Ask for help (maybe from a teacher or friend)`,
            value: "ask_help"
          },
          {
            text: `Look up examples of other {{=current_project}}`,
            value: "view_example"
          },
          {
            text: `Click through some tutorials on {{=current_project}}`,
            value: "watch_tutorial"
          }
        ]
      }
    ]
  },
  {
    type: "brain_points",
    dialogue: [
      {
        speaker: "bot",
        content:
          "hi steph! I see that you just tried a new way to snap together code pieces! As you experiment, you are working your brain hard and learning!"
      },
      {
        speaker: "bot",
        content: "Experimenting with code! +5 brain points!"
      }
    ]
  }
];
