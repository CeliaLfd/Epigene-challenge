import React, { useEffect, useState } from "react";
import { Button } from "../components/common/Button/Button";
import { Column, Row } from "../components/common/GridFlex/GridFlex";
import { Input } from "../components/common/Input/Input";
import {
  Table,
  TableCell,
  TableHead,
  TableRow,
} from "../components/common/Table/Table";
import { Tag } from "../components/common/Tag/Tag";
import {
  H1,
  Text,
  TextSecondary,
} from "../components/common/Typography/Typography";

type gene = {
  name: string;
  id: number;
  geneset_id: number;
};

type genesetsType = {
  id: string;
  title: string;
  genes: gene[];
};

const genesetsPerPage = 5;

const getNextGenesets = (arr: genesetsType[]) => (index: number) => {
  const genesets = arr.slice(index, index + genesetsPerPage);

  return genesets;
};

const Genesets = () => {
  const [genesetsList, setGenesetsList] = useState<genesetsType[]>([]);
  const [displayGenesets, setDisplayGenesets] = useState<genesetsType[]>([]);
  const [next, setNext] = useState(genesetsPerPage);

  const [search, setSearch] = useState("");

  const getGenesets = getNextGenesets(genesetsList);

  useEffect(() => {
    fetch("http://localhost:8000/genesets")
      .then((res) => res.json())
      .then((genesetsList) => {
        setGenesetsList(genesetsList);
      });
  }, []);

  useEffect(() => {
    if (search != "") {
      const results = genesetsList.filter((item) =>
        item.title.toUpperCase().includes(search.toUpperCase())
      );

      setDisplayGenesets(results);
    } else {
      setDisplayGenesets(getGenesets(0));
    }
  }, [genesetsList, search]);

  const handleShowMoreGenesets = () => {
    const genesets = [...displayGenesets, ...getGenesets(next)];
    setDisplayGenesets(genesets);
    setNext(next + genesetsPerPage);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <Column gap="large">
      <H1>Genesets list</H1>
      <Input
        type="text"
        onChange={handleSearch}
        placeholder="Search a geneset by title"
      />

      <Table wrap="wrap" gap="xsmall">
        <TableHead gap="medium">
          <TableCell width="20%">Title</TableCell>
          <TableCell grow={1}>Genes</TableCell>
        </TableHead>
        {displayGenesets.map((geneset, index) => (
          <TableRow key={index} gap="medium">
            <TableCell width="20%">
              <Column gap="tiny" horizontalAlignment="flex-start">
                <Text weight="semibold">{geneset.title}</Text>
                <Tag>
                  {geneset.genes.length}{" "}
                  {geneset.genes.length > 1 ? "genes" : "gene"}
                </Tag>
              </Column>
            </TableCell>
            <TableCell grow={1}>
              <Row gap="small">
                {!!geneset.genes.length ? (
                  geneset.genes.map((gene) => (
                    <Tag level="hollow">{gene.name}</Tag>
                  ))
                ) : (
                  <TextSecondary>No gene</TextSecondary>
                )}
              </Row>
            </TableCell>
          </TableRow>
        ))}
        <Button onClick={handleShowMoreGenesets}>Load more</Button>
      </Table>
    </Column>
  );
};

export default Genesets;
