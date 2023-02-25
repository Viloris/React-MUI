import React from "react";
import {
    Button,
    DialogTitle,
    Dialog,
    DialogContent,
    DialogContentText,
    Alert,
    LinearProgress,
    DialogActions,
    CircularProgress
} from "@mui/material";

export default function ProcessDialog(props) {
    return (
        <>
            <Dialog
                open={props.dialogOpen}
                onClose={props.disagreeDialog}
                fullWidth
                maxWidth={props.maxWidth}
            >
                <DialogTitle>{props.dialogTitle}</DialogTitle>
                <DialogContent dividers>
                    <DialogContentText
                        style={{
                            display:
                                (props.showAlert && !props.showProgress)
                                    ? "block"
                                    : "none",
                        }}
                    >
                        <Alert severity={props.responseType}>
                            {props.responseMessage}
                        </Alert>
                    </DialogContentText>
                    <DialogContentText
                        style={{
                            display: !props.showAlert ? "block" : "none",
                        }}
                    >
                        {props.dialogContent}
                    </DialogContentText>
                    <DialogContentText
                        style={{
                            margin: 10,
                            display:
                                (!props.showAlert &&
                                props.showProgress &&
                                props.linearProgress)
                                    ? "block"
                                    : "none",
                        }}
                    >
                        <LinearProgress />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.disagreeDialog}>
                        {props.showAlert ? "Close" : "Cancel"}
                    </Button>
                    <CircularProgress
                        style={{
                            display:
                                (!props.showAlert &&
                                props.showProgress &&
                                !props.linearProgress)
                                    ? "block"
                                    : "none",
                        }}
                    />
                    <Button
                        disabled={props.disableButton}
                        onClick={props.agreeDialog}
                        variant="contained"
                        color="primary"
                        style={{
                            display:
                                (props.showAlert || props.showProgress)
                                    ? "none"
                                    : "block",
                        }}
                    >
                        {props.buttonCaption}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
