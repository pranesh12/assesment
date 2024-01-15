import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ModalB = ({ showModal, handleClose }) => {
  const [allCountry, setAllcoutry] = useState([]);
  useEffect(() => {
    fetch("https://contact.mediusware.com/api/contacts/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setAllcoutry(data);
      });
  }, []);
  // const filterData = allCountry?.filter()
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Us Contacts</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {allCountry?.results?.map((e) => {
          return (
            <div className="mb-3 bg-secondary color-light" key={e.id}>
              <p>{e.country.name}</p>
              <p>{e.phone}</p>
            </div>
          );
        })}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalB;
