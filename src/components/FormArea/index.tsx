import React, { useState } from "react";
import { categories } from "../../data/categories";
import { Item } from "../../types/Item";
import * as Styled from "./styles";

type Props = {
  onAdd: (item: Item) => void;
}

const FormArea = ({ onAdd }: Props) => {

  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");

  const categoryKeys: string[] = Object.keys(categories);

  const checkError = (): Array<string> => {
    let errors: string[] = [];

    if (isNaN(new Date(date).getTime())) {
      errors.push("Data inválida!");
    }
    if (!title) {
      errors.push("Título vazio!");
    }
    if (!categoryKeys.includes(category)) {
      errors.push("Categoria inválida!")
    }
    if (Number(value) <= 0) {
      errors.push("Valor inválido")
    }

    return errors;
  }

  const handleAdd = (event: React.FormEvent) => {
    event.preventDefault();

    if (checkError().length > 0) {
      return alert(checkError().join("\n"));
    }

    const newItem = {
      date: new Date(date),
      category: category,
      title: title,
      value: Number(value),
    }
    onAdd(newItem);
    console.log(newItem)
    clearFields();
  }

  const clearFields = () => {
    setTitle("");
    setCategory("")
    setDate("")
    setValue("")
  }

  return (
    <Styled.Container>
      <Styled.Form onSubmit={handleAdd}>
        <Styled.Input
          name="title"
          value={title}
          onChange={event => setTitle(event.target.value)}
          placeholder="insira o título"
        />
        <Styled.Input
          name="value"
          value={value}
          onChange={event => setValue(event.target.value)}
          placeholder="insira o valor" />
        <Styled.Select
          name="category"
          placeholder="insira a categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        >
          <>
            <option id="base" selected>escolha a categoria</option>
            {categoryKeys.map((key, index) => (
              <option key={index} value={key}>{categories[key].title}</option>
            ))}
          </>
        </Styled.Select>
        <Styled.Input id="date"
          name="date"
          type="date"
          onChange={event => setDate(event.target.value)}
        />
        <Styled.Button type="submit">
          Adicionar
        </Styled.Button>
      </Styled.Form>

    </Styled.Container >
  );
}

export { FormArea }