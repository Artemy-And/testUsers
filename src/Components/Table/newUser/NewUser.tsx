import React, {ChangeEvent, useCallback, useState} from "react";
import Modal from "react-modal";
import style from "../Table.module.css";
import Grid from "@material-ui/core/Grid/Grid";
import {Button, Checkbox, FormControl, FormGroup, TextField} from "@material-ui/core";
import {MockUsersType, newGroupType} from "../TableListOfUsers";

type NewContactPropsType = {
    userNew: MockUsersType
    setUserNew: ({}: MockUsersType) => void
    addNewUser: (user: MockUsersType) => void
    setModal: (value: boolean) => void
    modal: boolean
    newGroup: newGroupType
}

const NewUserMemo = (props: NewContactPropsType) => {

    let onChangeTextFieldName = useCallback((e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        props.setUserNew({
            ...props.userNew,
            first_name: e.target.value
        })
    }, [props.userNew])
    let onChangeTextFieldLastname = useCallback((e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        props.setUserNew({
            ...props.userNew,
            last_name: e.target.value
        })
    }, [props.userNew])
    let onChangeTextFieldGroup = useCallback((e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, groupName: newGroupType) => {
        props.setUserNew({
            ...props.userNew,
            group: groupName
        })
    }, [props.userNew])
    let addUserClick = useCallback(() => {
        props.addNewUser(props.userNew)
        props.setModal(false)
        props.setUserNew({group: '', last_name: '', first_name: ''})
    }, [props.userNew])
    const closeButtonClick = () => {
        props.setModal(false)
        props.setUserNew({group: '', last_name: '', first_name: ''})
    }

    let buttonDisabled = (props.userNew.first_name.length > 0) && props.userNew.last_name.length > 0 && props.userNew.group.length > 0 ? false : true
    let checkboxDisabled = props.userNew.group.length > 1 ? true : false

    return (
        <Modal
            isOpen={props.modal}
            className={style.modalUser}
            contentLabel="Example Modal"
        >
            <div className={style.info}>
                <Grid container justify="center">
                    <Grid item xs={10}>
                        <FormControl>
                            <FormGroup>
                                <TextField type={'text'}
                                           variant="outlined"
                                           margin="normal"
                                           placeholder={"Name"}
                                           value={props.userNew.first_name}
                                           onChange={onChangeTextFieldName}/>
                                <TextField type={'text'}
                                           variant="outlined"
                                           margin="normal"
                                           placeholder={"Lastname"}
                                           value={props.userNew.last_name}
                                           onChange={onChangeTextFieldLastname}/>
                                <span>
                                        <Checkbox
                                            disabled={checkboxDisabled}
                                            value={props.userNew.group}
                                            onChange={(e) => {
                                                onChangeTextFieldGroup(e, 'managment')
                                            }}/>Managment</span>
                                <span> <Checkbox value={props.newGroup}
                                                 disabled={checkboxDisabled}
                                                 onChange={(e) => {
                                                     onChangeTextFieldGroup(e, 'specialist')
                                                 }}/>Specialist</span>
                                <span><Checkbox value={props.newGroup}
                                                disabled={checkboxDisabled}
                                                onChange={(e) => {
                                                    onChangeTextFieldGroup(e, 'HR')
                                                }}
                                />HR</span>
                                <span><Checkbox value={props.newGroup}
                                                disabled={checkboxDisabled}
                                                onChange={(e) => {
                                                    onChangeTextFieldGroup(e, 'accountant')
                                                }}
                                />Accountant</span>
                                <Button variant="contained"
                                        color="primary"
                                        disabled={buttonDisabled}
                                        onClick={addUserClick}>
                                    ADD
                                </Button>
                                <Button variant="contained" color="secondary" onClick={closeButtonClick}>Close</Button>
                            </FormGroup>
                        </FormControl>
                    </Grid>
                </Grid>
            </div>
        </Modal>
    )
}
export const NewUser = React.memo(NewUserMemo)