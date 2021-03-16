import React, {useCallback, useState} from "react";
import style from './Table.module.css'
import {Button, Checkbox} from "@material-ui/core";
import {NewUser} from "./newUser/NewUser";


export type MockUsersType = {
    "first_name": string,
    "last_name": string,
    "group": string
}
export type newGroupType = 'managment' | 'specialist' | "HR" | 'accountant' | ''


const TableListOfUsersMemo = () => {
    const usersJSON = require("./../mock/final.json")
    let [users, setUsers] = useState<Array<MockUsersType>>(usersJSON)
    let [newGroup, setNewGroup] = useState<newGroupType>('')
    let [modal, setModal] = useState<boolean>(false)
    const [userNew, setUserNew] = useState<MockUsersType>({
        first_name: '',
        last_name: '',
        group: '' as newGroupType,
    })


    const addNewUser = useCallback((user: MockUsersType) => {
        let newUser = {first_name: user.first_name, last_name: user.last_name, group: user.group};
        setUsers([newUser, ...users])
    }, [users])

    let filteredNames = users

    const onHandleClickASCName = useCallback(() => {
        setUsers([...filteredNames].sort((a, b) => {
            return a.first_name === b.first_name ? 0 :
                a.first_name > b.first_name ? 1 : -1
        }))
    }, [filteredNames])
    const onHandleClickDESCName = useCallback(() => {
        setUsers([...filteredNames].sort((a, b) => {
            return a.first_name === b.first_name ? 0 :
                a.first_name < b.first_name ? 1 : -1
        }))
    }, [filteredNames])
    const onHandleClickASCLastname = useCallback(() => {
        setUsers([...filteredNames].sort((a, b) => {
            return a.last_name === b.last_name ? 0 :
                a.last_name > b.last_name ? 1 : -1
        }))
    }, [filteredNames])
    const onHandleClickDESCLastname = useCallback(() => {
        setUsers([...filteredNames].sort((a, b) => {
            return a.last_name === b.last_name ? 0 :
                a.last_name < b.last_name ? 1 : -1
        }))

    }, [filteredNames])


    if (newGroup === 'managment') {
        filteredNames = filteredNames.filter((c) => c.group === 'managment')
    }
    if (newGroup === 'specialist') {
        filteredNames = filteredNames.filter((c) => c.group === 'specialist')
    }
    if (newGroup === 'HR') {
        filteredNames = filteredNames.filter((c) => c.group === 'HR')
    }
    if (newGroup === 'accountant') {
        filteredNames = filteredNames.filter((c) => c.group === 'accountant')
    }


    return (
        <div>
            <Button color="primary" onClick={() => {
                setModal(true)
            }}>Добавить Пользователя
            </Button>
            <NewUser
                modal={modal}
                setModal={setModal}
                userNew={userNew}
                setUserNew={setUserNew}
                newGroup={newGroup}
                addNewUser={addNewUser}
            />
            <div className={style.filterContacts}>
                <div>
                    <Checkbox color="primary" onClick={() => {
                        setNewGroup('managment')
                    }}
                    />Managment
                </div>
                <div><Checkbox color="primary" onClick={() => {
                    setNewGroup('specialist')
                }}/>Specialist
                </div>
                <div><Checkbox color="primary" onClick={() => {
                    setNewGroup('HR')
                }}/>Human resource
                </div>
                <div><Checkbox color="primary" onClick={() => {
                    setNewGroup('accountant')
                }}/>Accountant
                </div>
                <div><Checkbox color="primary" onClick={() => {
                    setNewGroup('')
                }}/>All
                </div>
            </div>

            <div className={style.newClassName}>
                <div className={style.tableForHover}>
                    <div className={style.myTableHeader}>
                        <div className={style.box1}>
                            <p className={style.headerName}>
                                Name
                                <span onClick={onHandleClickASCName}>▲</span>
                                <span onClick={onHandleClickDESCName}>▼</span>
                            </p>
                        </div>
                        <div className={style.box2}>
                            <p className={style.headerName}>Lastname
                                <span onClick={onHandleClickASCLastname}>▲</span>
                                <span onClick={onHandleClickDESCLastname}>▼</span>
                            </p>
                        </div>
                        <div className={style.box3}>
                            <p className={style.headerName}>Group</p>
                        </div>

                    </div>

                    {filteredNames.map((el, index) => {
                        return (
                            <div
                                className={style.myTable} key={index}>
                                <div className={style.box1}>
                                    <p>{el.first_name}</p>
                                </div>
                                <div className={style.box2}>
                                    <p>{el.last_name}</p>
                                </div>
                                <div className={style.box3}>
                                    <p>{el.group}</p>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
        </div>)
}
export const TableListOfUsers = React.memo(TableListOfUsersMemo)

