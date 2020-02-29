import React, { useState } from 'react';
import {
    Button,
    FormGroup,
    Input,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
} from 'reactstrap';

export default function ConfirmDeleteCat(props) {

    const [isDisabledDeleteConfirmationButton, setIsDisabledDeleteConfirmationButton] = useState(true);
    console.log('isDisabledDeleteConfirmationButton '+isDisabledDeleteConfirmationButton);
    const modalConfirmationUserInputChange = (e) => {
        const inputText = e.target.value;
        setIsDisabledDeleteConfirmationButton(inputText.trim().toLowerCase() !== props.name.trim().toLowerCase());
    };

    const deleteButtonClick = () => {
        setIsDisabledDeleteConfirmationButton(true);
        props.onSuccess();

    };

    const cancelButtonClick = () => {
        setIsDisabledDeleteConfirmationButton(true);
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
                        disabled={isDisabledDeleteConfirmationButton}>Remove</Button>

                <Button color="secondary"
                        onClick={cancelButtonClick}>Spare</Button>
            </ModalFooter>
        </Modal>);
}
