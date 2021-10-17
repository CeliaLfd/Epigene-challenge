import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { faPlus, faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button } from "../components/common/Button/Button";
import { Column, Row } from "../components/common/GridFlex/GridFlex";
import { Input } from "../components/common/Input/Input";
import { H2, Text } from "../components/common/Typography/Typography";
import { colors, spacings, transition } from "../style/theme";
import { remCalc } from "../utils/selectors";

const slideLeft = keyframes`
  from {
    transform: translateX(500px);
  }
  to {
    transform: translateY(0);
  }
`;

const opacity = keyframes`
 from {
   opacity: 0;
 }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 9;
  animation: ${opacity} 200ms ${transition.timing};
`;

const FormPanel = styled.div`
  position: relative;
  width: ${remCalc(500)};
  margin-left: auto;
  background-color: ${colors.white};
  height: 100%;
  z-index: 8;
  padding: ${spacings.medium};
  animation: ${slideLeft} 550ms ${transition.timing};
`;

const GenesList = styled(Column)`
  border: 1px solid ${colors.grey100};
  background-color: ${colors.white};
  border-radius: 6px;
`;

const GeneItem = styled(Row)`
  padding: ${spacings.tiny} ${spacings.small};

  &:first-of-type {
    padding-top: ${spacings.small};
  }
  &:last-of-type {
    padding-bottom: ${spacings.small};
  }
`;

type Props = {
  close: () => void;
  handleNewGeneset: any;
};

export const GenesetForm = ({ close, handleNewGeneset }: Props) => {
  const [genes, setGenes] = useState([""]);

  const addGene = () => {
    const newInputGene = [...genes, ``];
    setGenes(() => newInputGene);
  };

  const removeInputGene = (index: number) => () => {
    const newGene = genes.filter((gene, i) => i !== index);
    setGenes(() => newGene);
  };

  const handleGeneName =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const geneTitle = event.target.value;

      const newGenes = [...genes];
      newGenes[index] = geneTitle;

      setGenes(() => newGenes);
    };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const title = event.target.title.value;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({
        title: `${title}`,
        genes: genes.map((gene) => ({
          name: gene,
        })),
      }),
    };

    fetch("http://localhost:8000/genesets", requestOptions).then(() => {
      handleNewGeneset({
        title: `${title}`,
        genes: genes,
      });
      close();
    });
  };

  return (
    <Overlay>
      <FormPanel>
        <form onSubmit={handleSubmit}>
          <Column gap="medium">
            <Row horizontalAlignment="space-between" verticalAlignment="center">
              <H2>Create a new Geneset</H2>
              <Button size="circle" level="ghost" onClick={() => close()}>
                <FontAwesomeIcon icon={faTimes} />
              </Button>
            </Row>
            <div>
              <label htmlFor="title">Title *</label>
              <Input id="title" type="text" name="title" required />
            </div>
            <Column gap="xsmall">
              <Text weight="semibold">List of genes</Text>
              <GenesList gap="tiny">
                {genes.map((value, index) => (
                  <GeneItem gap="xsmall" key={index}>
                    <Input
                      type="text"
                      placeholder="Gene name"
                      value={value}
                      onChange={handleGeneName(index)}
                    />
                    <Button
                      size="small"
                      type="button"
                      level="grey"
                      onClick={removeInputGene(index)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                  </GeneItem>
                ))}
                <Button level="grey" type="button" onClick={addGene}>
                  <FontAwesomeIcon icon={faPlus} />
                  Add a gene
                </Button>
              </GenesList>
            </Column>
            <Button type="submit">Create the geneset</Button>
          </Column>
        </form>
      </FormPanel>
    </Overlay>
  );
};
