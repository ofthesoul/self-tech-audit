import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { Form, FormGroup, Label, Input, Button, Container } from "reactstrap";
import { currentEvents } from "./CurrentEvents";

export default function InfoForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [event, setEvent] = React.useState("");
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name !== "" || email !== "" || event !== "") {
      await addDoc(collection(db, "audits"), {
        name,
        email,
        event,
        completed: false,
      });
      setName("");
      setEmail("");
      setEvent("");
    }
  };

  useEffect(() => {
    if (name !== "" && email.includes("@")) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [name, email]);
  return (
    <Container>
      <div className="mt-5 text-center fs-5">
        To make sure your presentation goes smoothly and lessen the chance of
        hiccups, we have created what we call a "technical audit" which will
        take inventory of your internet connection and computer setup to send to
        our team for record. We will work with you to rectify anything that
        isn't optimal. <br></br>This should only take a minute!
      </div>
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
              return <option>{item.name}</option>;
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
