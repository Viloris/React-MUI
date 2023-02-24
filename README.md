# React-MUI

### Process Dialog component

Easy-to-use React-MUI dialog box component for processes (handling: confirmation, progress bar during the process, feedback about the process).


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
