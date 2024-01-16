# Boilerplate for JS tasks

**Read [the guideline](https://github.com/mate-academy/js_task-guideline/blob/master/README.md) before start**
## ❗️❗️❗️ DON'T FORGET TO PROOFREAD YOUR CODE WITH [CHECKLIST](https://github.com/mate-academy/js_task-transportation-on-vacation/blob/master/checklist.md) BEFORE SENDING YOUR PULL REQUEST
function transformState(state, actions) {
  // write code here
  actions.forEach(action => {
    if (action.type === 'addProperties') {
      Object.assign(state, action.extraData);
    } else if (action.type === 'removeProperties') {
      action.keysToRemove.forEach(key => {
        delete state[key];
      });
    } else if (action.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  });
}