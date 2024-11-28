import {TaskStatus} from "../../interfaces/TaskStatus.ts";
import {
    Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack
} from "@mui/material";
import {FormContainer, TextFieldElement, TextareaAutosizeElement} from 'react-hook-form-mui';
import {DatePickerElement} from 'react-hook-form-mui/date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import {LocalizationProvider} from '@mui/x-date-pickers'

interface TaskDialogProps {
    open: boolean;
    onClose: () => void;
    onStatusSaved: () => void;
    status?: TaskStatus;
}

type FormProps = {
    title: string
    description: string
    due_date: string
}

const TaskDialog = (props: TaskDialogProps) => {

    const onSubmit = (data: FormProps) => {
        console.log(data);
    }

    const defaultValues: FormProps = {title: '', description: '', due_date: ''};

    return (<Dialog open={props.open} onClose={props.onClose}>
            <DialogTitle>Create Task</DialogTitle>
            <FormContainer defaultValues={defaultValues} onSuccess={onSubmit}>
                <DialogContent>
                    <Stack direction={'column'}>
                        <TextFieldElement name={'title'} label={'Title'} required/>
                        <TextareaAutosizeElement name={'description'} label={'Description'} required/>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePickerElement name={'date'} label={'Date'}/>
                        </LocalizationProvider>
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.onClose}>Cancel</Button>
                    <Button variant="contained" type="submit">
                        {props.status ? "Edit" : "Create"}
                    </Button>
                </DialogActions>
            </FormContainer>
        </Dialog>);
};

export default TaskDialog;
