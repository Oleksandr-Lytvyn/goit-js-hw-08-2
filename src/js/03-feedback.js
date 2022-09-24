import throttle from "lodash.throttle"
const formRef = document.querySelector('.feedback-form');
const LOCALE_STORAGE_NAME = 'contactFormKey';

const save = (key, value) => {
    try {
      const serializedState = JSON.stringify(value);
      localStorage.setItem(key, serializedState);
    } catch (error) {
      console.error("Set state error: ", error.message);
    }
  };
  const load = key => {
    try {
      const serializedState = localStorage.getItem(key);
      return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
      console.error("Get state error: ", error.message);
    }
  };

initPage();

const onFormInput = (event)=>{
    const {name, value} = event.target
    try {
        let saveData = localStorage.getItem(LOCALE_STORAGE_NAME)
        if(saveData) {
            saveData = JSON.parse(saveData)
        } else {
            saveData = {};
        }
        saveData[name] = value;
        save(LOCALE_STORAGE_NAME, saveData)
        const stringifyData = JSON.stringify(saveData)
        localStorage.setItem(LOCALE_STORAGE_NAME, stringifyData)
    } catch (error) {
        console.error(error);
    } 
    
}

const throttledOnFormInput = throttle(onFormInput, 500)
formRef.addEventListener('input', throttledOnFormInput)

function initPage () {
    const saveData = load(LOCALE_STORAGE_NAME);
    if (!saveData) {
        return
    }  
    Object.entries(saveData).forEach(([name, value])=>{
        formRef.elements[name].value = value; 
    })
};

function isSubmit(event) {
    event.preventDefault()
    const {elements: {email, message}} = event.currentTarget;
    console.log({email: email.value, message: message.value});
    event.currentTarget.reset();
    localStorage.removeItem(LOCALE_STORAGE_NAME);
}
formRef.addEventListener('submit', isSubmit)
