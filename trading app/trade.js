let trades = [];

function addTrade() {
const pair = document.getElementById("pair").value;
const risk = parseFloat(document.getElementById("risk").value);
const reward = parseFloat(document.getElementById("reward").value);
const plan = document.getElementById("plan").value;

// 🚨 Discipline Rule (YOUR EDGE)
if (risk > 5000) {
alert("❌ You broke your risk rule (Max = 5000)");
return;
}

const trade = {
pair,
risk,
reward,
followedPlan: plan === "yes"
};

trades.push(trade);
updateStats();
}

function updateStats() {
let totalRisk = 0;
let totalReward = 0;
let disciplineCount = 0;

trades.forEach(t => {
totalRisk += t.risk;
totalReward += t.reward;
if (t.followedPlan) disciplineCount++;
});

const total = trades.length;
const discipline = total ? (disciplineCount / total) * 100 : 0;
const rr = totalRisk ? totalReward / totalRisk : 0;

document.getElementById("total").innerText = total;
document.getElementById("totalRisk").innerText = totalRisk;
document.getElementById("totalReward").innerText = totalReward;
document.getElementById("discipline").innerText = discipline.toFixed(1);
document.getElementById("rr").innerText = rr.toFixed(2);
}
