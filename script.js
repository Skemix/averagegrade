function getGrades() {
    var numSubjects = parseInt(document.getElementById('numSubjects').value);
    var grades = [];

    for (var i = 0; i < numSubjects; i++) {
        var grade = parseFloat(prompt("Enter Grade (0-100) for Subject No. " + (i + 1)));
        grades.push(grade);
    }

    displayGrades(grades);
}

function calculateAverage(grades) {
    var sum = grades.reduce((acc, val) => acc + val, 0);
    return sum / grades.length;
}

// Grading: A >=70, B >=60-69, C >=50-59, D >=45-49, E >=40-44, F <40 (IRL)
function getGradeLetter(grade) {
    if (grade >= 70) {
        return 'A';
    } 
	else if (grade >= 60) {
        return 'B';
    } 
	else if (grade >= 50) {
        return 'C';
    } 
	else if (grade >= 45) {
        return 'D';
	} 
	else if (grade >= 40) {
        return 'E';
    } 
	else {
        return 'F';
    }
}

function displayGrades(grades) {
    var average = calculateAverage(grades).toFixed(2);

    var gradesContainer = document.getElementById('gradesContainer');
    gradesContainer.innerHTML = '';

    grades.forEach(function(grade, index) {
        var gradeLetter = getGradeLetter(grade);
        var gradeElement = document.createElement('div');
        gradeElement.textContent = 'Subject ' + (index + 1) + ': ' + grade + ' - Grade: ' + gradeLetter;
        gradesContainer.appendChild(gradeElement);
    });

    var averageElement = document.createElement('div');
    averageElement.textContent = 'Overall Average: ' + average;
    gradesContainer.appendChild(averageElement);
}