import React, { useState } from 'react'

export default function SubmitButton(props) {
    const {id, label, onSubmit} = props
    const [isLoading, setisLoading] = useState(false)

    const submit = () => {
        setisLoading(true)
        onSubmit()
    }

    return <button data-testid={id} onSubmit={submit} disabled={isLoading}>
        {label}
    </button>
}
