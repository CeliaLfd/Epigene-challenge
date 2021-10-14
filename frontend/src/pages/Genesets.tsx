import { useEffect, useState } from "react";
import { Column } from "../components/common/GridFlex/GridFlex";
import { H2, Text } from "../components/common/Typography/Typography";

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

const genesetsPerPage = 10;

const getNextGenesets = (arr: genesetsType[]) => (index: number) => {
  const genesets = arr.slice(index, index + genesetsPerPage);

  return genesets;
};

const Genesets = () => {
  const [genesetsList, setGenesetsList] = useState<genesetsType[]>([]);
  const [displayGenesets, setDisplayGenesets] = useState<genesetsType[]>([]);
  const [next, setNext] = useState(genesetsPerPage);

  const getGenesets = getNextGenesets(genesetsList);

  useEffect(() => {
    fetch("http://localhost:8000/genesets")
      .then((res) => res.json())
      .then((genesetsList) => {
        setGenesetsList(genesetsList);
      });
  }, []);

  useEffect(() => {
    setDisplayGenesets(getGenesets(0));
  }, [genesetsList]);

  const handleShowMoreGenesets = () => {
    const genesets = [...displayGenesets, ...getGenesets(next)];
    setDisplayGenesets(genesets);
    setNext(next + genesetsPerPage);
  };

  return (
    <Column gap="large">
      <H2>Genesets list</H2>
      <div>
        <ul>
          {displayGenesets.map((geneset, index) => (
            <li key={index}>
              <Text>{geneset.title}</Text>
              <p>
                {geneset.genes.length}{" "}
                {geneset.genes.length > 1 ? "genes" : "gene"}
              </p>
              <div>
                {!!geneset.genes.length &&
                  geneset.genes.map((gene) => <p>{gene.name}</p>)}
              </div>
            </li>
          ))}
        </ul>
        <button onClick={handleShowMoreGenesets}>Load more</button>
      </div>
    </Column>
  );
};

export default Genesets;
