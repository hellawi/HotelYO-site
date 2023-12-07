import * as React from 'react';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';

export default function AccordionControlled() {
  const [index, setIndex] = React.useState<number | null>(0);
  return (
    <AccordionGroup sx={{ maxWidth: 400 }} size='lg'>
      <Accordion
        expanded={index === 0}
        onChange={(event, expanded) => {
          setIndex(expanded ? 0 : null);
        }}
      >
        <AccordionSummary>Menu</AccordionSummary>
        <AccordionDetails>
          тут должно быть меню ресторана
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={index === 1}
        onChange={(event, expanded) => {
          setIndex(expanded ? 1 : null);
        }}
      >
        <AccordionSummary>Breakfasts</AccordionSummary>
        <AccordionDetails>
          инфа о завтраках
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={index === 2}
        onChange={(event, expanded) => {
          setIndex(expanded ? 2 : null);
        }}
      >
        <AccordionSummary>Lobby-bar</AccordionSummary>
        <AccordionDetails>
          лобби-бар (если имеется)
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={index === 3}
        onChange={(event, expanded) => {
          setIndex(expanded ? 3 : null);
        }}
      >
        <AccordionSummary>Solemn events, wedding</AccordionSummary>
        <AccordionDetails>
          инфа про торжественные мероприятия и в-ть свадеб
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={index === 4}
        onChange={(event, expanded) => {
          setIndex(expanded ? 4 : null);
        }}
      >
        <AccordionSummary>Corporate events</AccordionSummary>
        <AccordionDetails>
          инфа про корпоративные мероприятия
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  );
}