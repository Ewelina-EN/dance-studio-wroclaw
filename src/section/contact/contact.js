const Contact = () => {
  return (
    <>
      <div id="contact_form"></div>
      <div className="form">
        <div>
          <h1>Odbierz darmowe wejście na pierwsze zajęcia</h1>
          <img
            className="form-img"
            src="{% static 'website/media/gallery/form.jpg' %}"
            alt="girls"
          />
        </div>
        <form action="/#contact_form" method="POST">
          <ul>
            <li className="alert"></li>

            <li>
              <input type="submit" value="WYŚLIJ" className="input-form" />
            </li>
          </ul>
        </form>
      </div>
    </>
  );
};

export default Contact;
