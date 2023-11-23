var num = document.querySelector("#num")
var advice = document.querySelector ("#advice")
var cli = document.querySelector ("#cli")

cli.onclick = function(){
    var x = Math.floor(Math.random()*200)
    num.innerHTML = "#" + x

    var chg=[
        "Take Care of Your Body",
        "Don’t Care About What Others Think of You",
        "Make Good Friends, Not More Friends",
        "Don’t Compare Yourself to Others",
        "Listen to Understand ",
        "Always Ask Why",
        "Don’t Rush To Grow Up",
        "Don’t Try To Plan Your Entire Life Out",
        " Friends Will Come And Go",
        "Cool Is Just A Matter Of Opinion",
        "Saying No Is Fine",
        "You’re Not The Only One Who’s Anxious",
        "Seek Help When Things Get Too Much",
        "Your Views Will Change Over Time",
        "Pick your people wisely",
        "Always make time for self-care.",
        "You have more courage than you know",
        "Be careful how you measure success",
        "dont give up",
        " BE A PERSON OF HIGH PRINCIPLE",
        "HAVE FUN",
        "Learn from Failure",
        "Surround Yourself with Positivity",
        "Celebrate Small Wins",
        "Stay Persistent and calm",
        "Find Your Passion",
        "Avoid Negative Influences",
        "Build a Support System",
        "Focus on Solutions",
        "Stay Healthy",
        "Be Patient",
        "Learn to Say No",
        "Break Down Big Tasks",
        "Stay Humble",
        "Focus on the Process",
        "Keep Learning",
        "Believe in Yourself",
        "Communication is Key",
        "Plan for the Future",
        "Build a Support System",
        "Stay Physically Active",
        "Set Realistic Goals",
        "Embrace Failure as a Learning Opportunity",
        "Learn Basic Self-Defense",
        "Celebrate Small Wins",
        "Practice Mindfulness",
        "Build a Personal Brand",
        "Learn a New Language",
        "Learn to Apologize",
    ]

    var randomchg=chg[Math.floor(Math.random()*chg.length)]

advice.innerHTML=randomchg;

}