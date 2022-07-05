import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { Form, FormGroup, Label, Input, Button, Container } from "reactstrap";
import { currentEvents } from "./CurrentEvents";

export default function TestsForm({ docRef }) {
  const [docRef, setDocRef] = React.useState("");
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name !== "" || email !== "" || event !== "") {
      const docRef = await addDoc(collection(db, "audits"), {
        name,
        email,
        event,
        completed: false,
      });
      setDocRef(docRef.id);
      console.log("Document written with ID: ", docRef.id);
      setName("");
      setEmail("");
      setEvent("");
    }
  };

  return (
    <Container>
      <div className="mt-5">
        Let the tests run. Do not exit the browser or switch off from this tab.
        This should only take a minute.
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
