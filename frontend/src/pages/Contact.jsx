

export default function Contact() {
  const handleFormSubmit = (formData) =>{
    const formInputData = Object.fromEntries(formData.entries())
    console.log(formInputData)
  }

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>

      <div className="container contact-wrapper">
        <form action={handleFormSubmit} method="POST">
          <input type="text" className="form-control" required autoComplete="false" placeholder="Enter your name" name="username" />
          <input type="email" className="form-control" required autoComplete="true" placeholder="Enter your email" name="username" />
          <textarea name="message" className="form-control" placeholder="Enter your message" rows="10" autoComplete="off" id=""></textarea>
          <button type="submit" value="send">Send</button>
        </form>
      </div>
    </section>
  )
}
