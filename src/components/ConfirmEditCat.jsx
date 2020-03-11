import React, { useState } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    Button,
    FormGroup,
    Input,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
} from 'reactstrap';

export default function ConfirmEditTodo(props) {

    const [isDisabledEditConfirmationButton, setIsDisabledEditConfirmationButton] = useState(true);
    //console.log('isDisabledEditConfirmationButton
    // '+isDisabledEditConfirmationButton);
    const modalConfirmationUserInputChange = (e) => {
        const inputText = e.target.value;
        setIsDisabledEditConfirmationButton(inputText.trim().toLowerCase() !== props.name.trim().toLowerCase());
    };

    const deleteButtonClick = () => {
        setIsDisabledEditConfirmationButton(true);
        props.onSuccess();

    };

    const cancelButtonClick = () => {
        setIsDisabledEditConfirmationButton(true);
        props.onCancel();
    };

    return (
        <Modal isOpen={Boolean(props.name)} toggle={props.onCancel}>
            <ModalHeader>Delete confirmation</ModalHeader>

            <ModalBody>

                <p>
                    Enter cat name <strong>{props.name}</strong> to
                    remove it
                </p>

                <FormGroup>
                    <Input type="text"
                           name="cat-name"
                           id="catName"
                           placeholder="Type name to remove"
                           onChange={modalConfirmationUserInputChange}

                    />
                </FormGroup>
            </ModalBody>

            <ModalFooter>
                <Button color="danger"
                        onClick={deleteButtonClick}
                        disabled={isDisabledEditConfirmationButton}>Remove</Button>

                <Button color="secondary"
                        onClick={cancelButtonClick}>Spare</Button>
            </ModalFooter>
        </Modal>);
}
