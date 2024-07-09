import React, { FC } from 'react';
import { FormSearchWrapper } from './FormSearch.styled';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

interface FormSearchProps {

}

const FormSearch: FC<FormSearchProps> = (props): React.FunctionComponentElement<FormSearchProps> => (
 <FormSearchWrapper>
    <Form>
      <Form.Group controlId='search_auto'>
         <Form.Label>Поиск авто по номеру</Form.Label>
         <Stack direction='horizontal' gap={0}>
            <Form.Control type='text' placeholder='Номерной знак'/>
            <Button name='search' type='button' form='search_auto' variant='primary' value='Поиск'>Поиск</Button>
         </Stack>
      </Form.Group>
    </Form>
 </FormSearchWrapper>
);

export default FormSearch;
