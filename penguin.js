var penPromise = d3.json("penguins/penguins/classData.json");

var getGrade = function(quizzes)
{
    return quizzes.grade;
}

var getMeanQ = function(penguin)
{
    return d3.mean(penguin.quizes.map(getGrade));
}

var getMeanH = function(penguin)
{
    return d3.mean(penguin.homework.map(getGrade));
}

var getMeanT = function(penguin)
{
    return d3.mean(penguin.test.map(getGrade));
}

var getMeanFinal = function(penguin)
{
    return d3.mean(penguin.quizes.map(getGrade));
}

var createImages = function(data)
{
    d3.select('#Images')
    .selectAll('tr')
    .data(data)
    .enter()
    .append('tr')
    .append('img')
    .attr("src", function(d){ return "penguins/penguins/" + d.picture;});
}

var createQuiz = function(data)
{
    
    var meanQuiz = data.map(getMeanQ);
    var temp = d3.select('#quiz')
    .selectAll('tr')
    .data(meanQuiz)
    .enter()
    .append('tr')
    .text(function(d){return d});
    return meanQuiz;
       
}

var createHomework = function(data)
{
    var meanHW = data.map(getMeanH);
    var temp = d3.select('#homework')
    .selectAll('tr')
    .data(meanHW)
    .enter()
    .append('tr')
    .text(function(d){return d});
    return meanHW;
}


var createTest = function(data)
{
    var meanTest = data.map(getMeanT);
    var temp = d3.select('#test')
    .selectAll('tr')
    .data(meanTest)
    .enter()
    .append('tr')
    .text(function(d){return d});
    return meanTest;
    
}
var createFolder = function(penguin)
{
    folder.meanQ = d3.mean(penguin.quizes.map(getGrade));
    folder.meanT = d3.mean(penguin.test.map(getGrade));
    folder.meanHW = d3.mean(penguin.homework.map(getGrade));
    return folder;
}


var createFinal = function(data)
{
    var folder = data.map(createFolder);
    console.log(folder);
    var temp = d3.select('#final')
    .selectAll('tr')
    .data(meanFinal)
    .enter()
    .append('tr')
    .text(function(d){return d});
}


penPromise.then(
    function(data)
    {
        console.log("works", data);
        createImages(data);
        createQuiz(data);
        createHomework(data);
        createTest(data);
        createFinal(data);
    },
    function(err)
    {
        console.log("broke", err);
    }
);