# React-MUI

### Process Dialog component

Easy-to-use React-MUI dialog box component for processes (handling: confirmation, progress bar during the process, feedback about the process).

#### Demo

##### Confirmation
![Confirmation](https://github.com/Viloris/React-MUI/blob/main/Dialog_screen_1.png)

##### Progress
![Confirmation](https://github.com/Viloris/React-MUI/blob/main/Dialog_screen_2.png)

##### Feedback
![Confirmation](https://github.com/Viloris/React-MUI/blob/main/Dialog_screen_3.png)

#### Usage
Simple import the *ProcessDialog.js* file and insert the component as a HTML object.

```
    <ProcessDialog
        dialogTitle="Title"
        dialogOpen={dialogOpen}
        showProgress={showProgress}
        showAlert={showAlert}
        responseType={responseType}
        dialogContent="Lorem ipsum dolor sit amet?"
        responseMessage="Success!"
        agreeDialog={() => agreeDialog()}
        disagreeDialog={() => disagreeDialog()}
        buttonCaption="OK"
        maxWidth="sm"
        linearProgress={true}
    />
```

##### Parameters
* dialogTitle: You can add a custom title text.
* dialogOpen: If true the dialog will appear.
* showProgress: If true the progress bar will appear.
* showAlert: If the the alert bar will appear, and the dialog content and the progress bar will not be displayed.
* responseType: Set the color of the alert bar. ("info", "success", "warning", "error")
* dialogContent: Here you can set the content of the dialog. If the alert bar is visible, the content will not be shown.
* responseMessage: The message will appear in the alert bar.
* agreeDialog: Callback function that triggers when agrre button has clicked.
* disagreeDialog: Callback function that triggers when cancel (close) button has clicked.
* buttonCaption: You can change the caption of the agree button.
* maxWidth: You can set the maximum width of the dialog window. ("xs", "sm", "md", "lg", "xl")
* linearProgress: If true a linear porgress bar will appear below the dialog content. If false a circular progress will apear instead of the aggree button. 
