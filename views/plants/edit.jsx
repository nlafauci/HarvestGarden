const React = require('react')
const Def = require('../default.jsx')

function edit_form({user}) {
    return (
        <Def user={user} title="Edit Plant Data">
            <main>
                <h1>Edit Plant</h1>
            </main>
        </Def>
    )
}

module.exports = edit_form