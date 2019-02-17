$(function() {
  const widget_id = 'muzu-chatbot';

  $('body').append(`<div class="botui-app-container" id="${widget_id}"> </div>`)
  document.getElementById(widget_id).innerHTML = '<bot-ui></bot-ui>';

  var botui = new BotUI(widget_id);

  // botui.message.add({
  //   content: 'Hello World from bot!'
  // }).then(function () { // wait till previous message has been shown.

  //   botui.message.add({
  //     delay: 1000,
  //     human: true,
  //     content: 'Hello World from human!'
  //   });
  // });

  // botui.message.add

  /*
  botui.message.bot({ // show first message
    delay: 200,
    content: 'hello'
  }).then(() => {
    return botui.message.bot({ // second one
      delay: 1000, // wait 1 sec.
      content: 'how are you?'
    })
  }).then(() => {
    return botui.action.button({ // let user do something
      delay: 1000,
      action: [
        {
          text: 'Good',
          value: 'good'
        },
        {
          text: 'Really Good',
          value: 'really_good'
        }
      ]
    })
  }).then(res => {
    return botui.message.bot({
      delay: 1000,
      content: `You are feeling ${res.text}!`
    })
  }).then(() => {
    return botui.action.text({ // show 'text' action
      action: {
        placeholder: 'Your name'
      }
    });
  });
  */


  const compute_delay = string => {
    return string.length * 10
  }


  const do_dialogue = (botui, dialogue, context) => {
    let next_botui;
    if(dialogue.input) {
      let input = dialogue.input;
      next_botui = botui.action.text({
        action: {
          placeholder: input.placeholder
        }
      }).then(res => {
        context[input.variable] = res.value;
      })
    } else if (dialogue.buttons) {
      let buttons = dialogue.buttons;
      next_botui = botui.action.button({
        action: buttons
      }).then(res => {
        if(res.type && res.type === 'input') {
          return botui.action.text()
        }
        return res;
      }).then(res => {
        context[dialogue.variable] = res.value;
      })
    } else {
      next_botui = botui.message.add({
        [dialogue.speaker]: true,
        content: dialogue.content,
        delay: compute_delay(dialogue.content)
      })
    }
    return next_botui.then(() => {
      return botui;
    })
  }

  const run_dialogue = (botui, dialogues, context={}) => {
    let conversation = dialogues[0].dialogue;
    console.log('conversation', conversation);
    let inst = Promise.resolve(botui);
    for(let i = 0; i < conversation.length; i++) {
      inst = inst.then(botui => do_dialogue(botui, conversation[i], context))
    }
  }

  run_dialogue(botui, dialogues);
})


/*
Confused:

Sorry to hear that you're confused. But when you're confused, that's when you can learn the most! What are you confused about?
______________
Yes, that does sound challenging. Hm... maybe you can try some of these tips!
Ask for help (maybe from a teacher or friend)
Look up examples of other ________
Click through some tutorials on _______
Would you like to try any of these? If so, just click on the option you'd like to try.



Intro:

Hi! My name is Muzu, and I am here to support you as you program amazing things! What is your name?
______________
Nice to meet you ______! What are you hoping to create in Scratch today?
Story
Game
Animation
Other _________
I donât know how to program myself, but am here to support you as you create your ________! Feel free to click on me whenever you want to chat. I will also check in on you from time to time. Happy programming!
Hi Grace! How are you feeling about your program? Feel free to reply whenever you want!
Excited!
Confused
Stuck
Unstuck

 */
