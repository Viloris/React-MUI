import React from "react";
import { Autocomplete, IconButton, TextField } from "@mui/material";
import InfoIcon from "@mui/icons-material/InfoOutlined";

export default function EIAutocomplete(params) {
    return (
        <Autocomplete
            {...params}
            renderInput={(params) => (
                <TextField
                    {...params}
                    margin="normal"
                    variant="outlined"
                    size="medium"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <>
                                {params.InputProps.endAdornment}
                                <IconButton size="small">
                                    <InfoIcon />
                                </IconButton>
                            </>
                        ),
                    }}
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            paddingRight: "10px!important",
                        },
                        "& > div.MuiAutocomplete-inputRoot[class*='MuiOutlinedInput-root']":
                            {
                                paddingRight: "9px",
                                "& button": {
                                    paddinRight: 0,
                                    order: 3,
                                },
                                // Info icon
                                "& > div.MuiAutocomplete-endAdornment": {
                                    position: "relative",
                                    order: 2,
                                },
                            },
                    }}
                />
            )}
        />
    );
}
