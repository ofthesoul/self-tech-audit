import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { Form, FormGroup, Label, Input, Button, Container } from "reactstrap";
import { currentEvents } from "./CurrentEvents";

export default function InfoForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [event, setEvent] = React.useState("");
  const [docRef, setDocRef] = React.useState("");
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name !== "" || email !== "" || event !== "") {
      const docRef = await setDoc(doc(db, "audits", event + " " + name), {
        name,
        email,
        event,
      });
      setDocRef(event + " " + name);
      console.log("Document written with ID: ", docRef.id);
      setName("");
      setEmail("");
      setEvent("");
    }
  };

  useEffect(() => {
    if (name !== "" && name.includes(" ") && email.includes("@")) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [name, email]);

  return (
    <Container>
      <div className="mt-5">
        Select your event, fill out the form, and then hit "Begin" to start your
        technical audit. <br></br>Your results will be sent to the Geniecast
        production team.
      </div>

      <Form onSubmit={handleSubmit}>
        <FormGroup className="mt-3">
          <Label for="userName">First and Last Name</Label>
          <Input
            id="userName"
            name="name"
            placeholder="'John Smith'"
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="mt-3">
          <Label for="userEmail">Email</Label>
          <Input
            id="userEmail"
            name="email"
            placeholder="'johnsmith@domain.com'"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="selectEvent">Select Event</Label>
          <Input
            id="selectEvent"
            name="select"
            type="select"
            onChange={(e) => setEvent(e.target.value)}
          >
            {currentEvents.map((item) => {
              return <option key={item.key}>{item.name}</option>;
            })}
          </Input>
        </FormGroup>
        <Button
          type="submit"
          disabled={submitDisabled}
          color="primary"
          className="fw-bold mt-2"
        >
          Click to Start!
        </Button>
      </Form>
    </Container>
  );
}
