import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const LeaderBoard = ({ history }) => {

    const userList = useSelector((state) => state.userList)
    const { users } = userList

    const userLogin = useSelector((state) => state.userLogin)
    const { userlogin } = userLogin


    const [sortUser, setsortUser] = useState([])


    useEffect(() => {

        if (!userlogin) {
            let sign = window.confirm('please sign in first');
            if (sign) {
                history.push('/')
            }
        }

        const scores = () => {
            setsortUser(Object.values(users).map(user => user).sort((a, b) => (Object.keys(users[b.id].answers).length + users[b.id].questions.length) - (Object.keys(users[a.id].answers).length + users[a.id].questions.length)))
        }
        scores()
    }, [users, history, userlogin])

    console.log(sortUser)

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Rank</th>
                    <th scope="col">ProPicture</th>
                    <th scope="col">user</th>
                    <th scope="col">Question Asked</th>
                    <th scope="col">Question Answered</th>
                </tr>
            </thead>
            <tbody>
                {sortUser && sortUser.map((user, index) => (
                    <tr key={user.id}>
                        <th scope="row">{index + 1}</th>
                        <td><img src={user.avatarURL} style={{ width: '30px' }} alt="avatar user" /> </td>
                        <td>{user.name}</td>
                        <td>{user.questions.length}</td>
                        <td>{Object.keys(user.answers).length}</td>
                    </tr>
                ))}

            </tbody>
        </table>
    )
}

export default LeaderBoard
