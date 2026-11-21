const tests=[
  ["Pythagoras 3-4-5",Math.abs(GPSEngine.distance({x:0,y:0},{x:3,y:4})-5)<1e-9],
  ["Three clean satellite ranges",GPSEngine.distance(GPSEngine.locateThree([0,1,2]),GPSEngine.receiver)<1e-6],
  ["Four clean satellite ranges",GPSEngine.distance(GPSEngine.estimatePosition(GPSEngine.measurements()),GPSEngine.receiver)<0.1],
  ["Added delay changes a range",GPSEngine.measurements(30)[0]>GPSEngine.measurements()[0]+29.9],
  ["Added delay moves the estimate",GPSEngine.distance(GPSEngine.estimatePosition(GPSEngine.measurements(30)),GPSEngine.receiver)>0.1]
];
const el=document.getElementById("results");
tests.forEach(([name,ok])=>{const p=document.createElement("p");p.textContent=`${ok?"PASS":"FAIL"}: ${name}`;el.appendChild(p);});
const summary=document.createElement("strong");summary.textContent=`${tests.filter(t=>t[1]).length}/${tests.length} tests passed`;el.prepend(summary);
