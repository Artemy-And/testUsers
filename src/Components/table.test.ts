// import {MockUsersType, newGroupType} from "./Table/TableListOfUsers";
// import React, {useState} from "react";
// import {create} from "domain";
//
// test('add new user', () => {
//
//
//     const setUsers = jest.fn()
// const useStateSpy = jest.spyOn(React,'useState')
//     // @ts-ignore
//     useStateSpy.mockImplementation((state:any)=>[state,setUsers])
//
//     const state = [
//         {
//             first_name: '1',
//             last_name: '1',
//             group: 'managment' as newGroupType,
//         },
//         {
//             first_name: '2',
//             last_name: '2',
//             group: 'specialist' as newGroupType,
//         }]
//     let newUser = {
//         first_name: '3',
//         last_name: '3',
//         group: 'specialist' as newGroupType,
//     }
//     // let [users, setUsers] = useState<Array<MockUsersType>>(state)
//
//     const addNewUser = (user: MockUsersType) => {
//         let newUser = {first_name: user.first_name, last_name: user.last_name, group: user.group};
//         setUsers([newUser, ...state])
//     }
//     addNewUser(newUser)
//
//     expect(state.length).toBe(3);
//     // expect(endState[2].title).toBe(newTodolistTitle);
//     // expect(endState[2].filter).toBe("all");
// });