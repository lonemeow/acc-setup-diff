import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';
import CarData from './CarData';

function displayItem(compValue, dispValue = compValue) {
  return {
    compValue: compValue,
    dispValue: dispValue
  };
}

const tyresSetup = [
  ['Compound', (s) => [displayItem(s?.basicSetup.tyres.tyreCompound)]],
  ['Pressure [psi]', (s, c) => s?.basicSetup.tyres.tyrePressure.map((v) => displayItem((c.tirePressureMin + v / 10).toFixed(1)))],
  ['Toe [°]', (s, c) => s?.basicSetup.alignment.toe.map((v, i) => displayItem((v / 100 + c.toeMins[i >> 1]).toFixed(2)))],
  ['Camber [clicks]', (s) => s?.basicSetup.alignment.camber.map((v) => displayItem(v))],
  ['Caster [°]', (s, c) => [
    displayItem(c?.casterFunc(s.basicSetup.alignment.casterLF).toFixed(1)),
    displayItem(c?.casterFunc(s.basicSetup.alignment.casterRF).toFixed(1))
  ]]
];

const electronicsSetup = [
  ['TC1', (s) => [displayItem(s?.basicSetup.electronics.tC1)]],
  ['TC2', (s) => [displayItem(s?.basicSetup.electronics.tC2)]],
  ['ABS', (s) => [displayItem(s?.basicSetup.electronics.abs)]],
  ['ECU map', (s) => [displayItem(s && s.basicSetup.electronics.eCUMap + 1)]]
];

const mechanicalSetup = [
  ['Antiroll bar', (s) => [
    displayItem(s?.advancedSetup.mechanicalBalance.aRBFront),
    displayItem(s?.advancedSetup.mechanicalBalance.aRBRear)
  ]],
  ['Diff preload [Nm]', (s) => [displayItem(s && s.advancedSetup.drivetrain.preload * 10 + 20)]],
  ['Brake power [%]', (s) => [displayItem(s && s.advancedSetup.mechanicalBalance.brakeTorque + 80)]],
  ['Brake bias [%]', (s, c) => [displayItem(s && s.advancedSetup.mechanicalBalance.brakeBias / 5 + c.brakeBiasMin)]],
  ['Steering ratio', (s, c) => [displayItem(s && s.basicSetup.alignment.steerRatio + c.steeringRatioMin)]],
  ['Wheel rate [N/m]', (s, c) => s?.advancedSetup.mechanicalBalance.wheelRate.map((v, i) => displayItem(c.wheelRates[i >> 1][v] * 1000))],
  ['Bumpstop rate [N]', (s) => s?.advancedSetup.mechanicalBalance.bumpStopRateUp.map((v) => displayItem(v * 100 + 300))],
  ['Bumpstop range', (s) => s?.advancedSetup.mechanicalBalance.bumpStopWindow.map((v) => displayItem(v))]
];

const dampersSetup = [
  ['Bump', (s) => s?.advancedSetup.dampers.bumpSlow.map((v) => displayItem(v))],
  ['Fast bump', (s) => s?.advancedSetup.dampers.bumpFast.map((v) => displayItem(v))],
  ['Rebound', (s) => s?.advancedSetup.dampers.reboundSlow.map((v) => displayItem(v))],
  ['Fast rebound', (s) => s?.advancedSetup.dampers.reboundFast.map((v) => displayItem(v))]
];

const aeroSetup = [
  ['Ride height [mm]', (s, c) => [
    displayItem(s && s.advancedSetup.aeroBalance.rideHeight[0] + c.rideHeightMinFront),
    displayItem(s && s.advancedSetup.aeroBalance.rideHeight[2] + c.rideHeightMinRear)
  ]],
  ['Brake ducts', (s) => s?.advancedSetup.aeroBalance.brakeDuct.map((v) => displayItem(v))],
  ['Splitter', (s) => [displayItem(s && s.advancedSetup.aeroBalance.splitter +1)]],
  ['Wing', (s) => [displayItem(s && s.advancedSetup.aeroBalance.rearWing +1)]]
];

const setupGroups = [
  ['Tyres', tyresSetup],
  ['Electronics', electronicsSetup],
  ['Mechanical', mechanicalSetup],
  ['Dampers', dampersSetup],
  ['Aero', aeroSetup]
];

function loadSetup(file) {
  const fr = new FileReader();
  return new Promise((resolve, reject) => {
    fr.onload = (e) => resolve(JSON.parse(e.target.result));
    fr.readAsText(file);
  });
}

function FileSelector(props) {
  return (
    <Form.Control type="file" onChange={props.onChange} />
  )
}

function DiffItem(props) {
  const compResult = props.value - props.other;
  const style = compResult > 0 ? 'bg-success' : compResult < 0 ? 'bg-danger' : 'bg-secondary';
  return (
    <span className={`badge ${style}`}>{props.text}</span>
  )
}

function DiffRow(props) {
  const left = props.left ?? [];
  const right = props.right ?? [];
  const leftItems = left.map((v, i) =>
    <DiffItem text={v.dispValue} value={v.compValue} other={right[i]?.compValue} />);
  const rightItems = right.map((v, i) =>
    <DiffItem text={v.dispValue} value={v.compValue} other={left[i]?.compValue} />);
  return (
    <tr key={props.desc}>
      <td>{leftItems}</td>
      <td>{props.desc}</td>
      <td>{rightItems}</td>
    </tr>
  )
}

function DiffSection(props) {
  return (
    <>
      <thead>
        <DiffRow desc={props.title} />
      </thead>
      <tbody>
        {props.setupItems.map(([desc, valueFunc]) =>
          <DiffRow key={desc} desc={desc} left={valueFunc(props.left, props.leftCar)} right={valueFunc(props.right, props.rightCar)} />)}
      </tbody>
    </>
  )
}

function UnsupportedCar(props) {
  return (
    <Alert variant="danger">
      Unsupported car: {props.model}
    </Alert>
  );
}

function App() {
  const [left, setLeft] = useState(undefined);
  const [right, setRight] = useState(undefined);

  const leftCar = CarData[left?.carName];
  const rightCar = CarData[right?.carName];

  var body;

  if (left && !leftCar) {
    body = <tbody>
      <tr><td colSpan="3"><UnsupportedCar model={left.carName} /></td></tr>
    </tbody>;
  } else if (right && !rightCar) {
    body = <tbody>
      <tr><td colSpan="3"><UnsupportedCar model={right.carName} /></td></tr>
    </tbody>;
  } else {
    body = <>
      <tbody>
        <DiffRow desc="Car model"
          left={[displayItem(leftCar?.name, leftCar?.name)]}
          right={[displayItem(rightCar?.name, rightCar?.name)]} />
      </tbody>
      {setupGroups.map(([title, items]) =>
        <DiffSection key={title} title={title} setupItems={items} leftCar={leftCar} left={left} rightCar={rightCar} right={right} />)}
    </>;
  }

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <td>
              <FileSelector onChange={(e) => loadSetup(e.target.files[0]).then((s) => setLeft(s))} />
            </td>
            <td></td>
            <td>
              <FileSelector onChange={(e) => loadSetup(e.target.files[0]).then((s) => setRight(s))} />
            </td>
          </tr>
        </thead>
        {body}
      </Table>
    </Container>
  );
}

export default App;
