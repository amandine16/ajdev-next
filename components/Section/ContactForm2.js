// import React, { useState } from 'react'

// export default function ContactForm() {
//     const [name, setName] = useState('')
//     const [email, setEmail] = useState('')
//     const [message, setMessage] = useState('')
//     const [submitted, setSubmitted] = useState(false)

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         console.log('Sending')
//         let data = {
//             name,
//             email,
//             message
//         }
//         fetch('/api/contact', {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json, text/plain, */*',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         }).then((res) => {
//             console.log('Response received')
//             if (res.status === 200) {
//                 console.log('Response succeeded!')
//                 setSubmitted(true)
//                 setName('')
//                 setEmail('')
//             }
//         })

//     }






//     return (
//         <div >
//             < form className='text-black' >
//                 < formGroup >
//                     < label htmlFor='name'>Name</label>
//                     < input type='text' name='name' onChange={(e) => setName(e.target.value)} />
//                 </formGroup>
//                 < formGroup  >
//                     < label htmlFor='email'>Email</label>
//                     < input type='email' name='email' onChange={(e) => setEmail(e.target.value)} />
//                 </formGroup>
//                 < formGroup  >
//                     < label htmlFor='message'>Message</label>
//                     < input type='text' name='message' onChange={(e) => setMessage(e.target.value)} />
//                 </formGroup>
//                 < input type='submit' onClick={(e) => { handleSubmit(e) }} />
//             </form >
//         </div>
//     )
// }
