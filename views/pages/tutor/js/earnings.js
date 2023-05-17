document.addEventListener('DOMContentLoaded', function() {
    // Sample data from the database
    const dataFromDatabase = {
      viewers: 1000,
      students: 10,
      followers: 50,
      lessons: 100,
      courses: 3,
      lastMonthEarnings: 1000,
      currentMonthEarnings: 1200,
    };
  
    // Calculated values
    const engagementRate = (dataFromDatabase.viewers / dataFromDatabase.followers) * 100;
    const earningsPerLesson = (dataFromDatabase.students + dataFromDatabase.viewers + dataFromDatabase.lessons) / dataFromDatabase.courses;
    const totalEarningsPerMonth = earningsPerLesson * dataFromDatabase.lessons; // Assuming all lessons are monetized
  
    // Update the summary values
    document.getElementById('viewersValue').textContent = dataFromDatabase.viewers;
    document.getElementById('studentsValue').textContent = dataFromDatabase.students;
    document.getElementById('followersValue').textContent = dataFromDatabase.followers;
    document.getElementById('lessonsValue').textContent = dataFromDatabase.lessons;
    document.getElementById('coursesValue').textContent = dataFromDatabase.courses;
    document.getElementById('engagementRateValue').textContent = engagementRate.toFixed(2) + '%';
    document.getElementById('earningPerLessonValue').textContent = '$' + earningsPerLesson.toFixed(2);
    document.getElementById('totalEarningsPerMonthValue').textContent = '$' + totalEarningsPerMonth.toFixed(2);
  
    // Update the earnings values in the HTML
    document.getElementById('lastMonthEarnings').querySelector('.earnings-value').textContent = '$' + dataFromDatabase.lastMonthEarnings;
    document.getElementById('currentMonthEarnings').querySelector('.earnings-value').textContent = '$' + dataFromDatabase.currentMonthEarnings;
  
    // Calculate the percentage difference
    const percentageDifference = ((dataFromDatabase.currentMonthEarnings - dataFromDatabase.lastMonthEarnings) / dataFromDatabase.lastMonthEarnings) * 100;
  
    // Update the percentage difference in the HTML
    document.getElementById('lastMonthEarnings').querySelector('.percentage-difference').textContent = percentageDifference.toFixed(2) + '% vs month';
    document.getElementById('currentMonthEarnings').querySelector('.percentage-difference').textContent = Math.abs(percentageDifference.toFixed(2)) + '% vs last month';
  
    // Create earnings chart
    const earningsChart = new Chart(document.getElementById('earnings-chart'), {
      type: 'bar',
      data: {
        labels: ['Last Month', 'Current Month'],
        datasets: [{
          label: 'Earnings',
          data: [dataFromDatabase.lastMonthEarnings, dataFromDatabase.currentMonthEarnings],
          borderColor: '#3498db',
          backgroundColor: 'transparent',
          borderWidth: 2,
        }]
      },
      options: {
        responsive: true,
        scales:
   {
          x: {
            display: true,
          },
          y: {
            beginAtZero: true,
            ticks: {
              callback: (value) => '$' + value,
            },
          },
        },
        plugins: {
          tooltip: {
            callbacks: {
              title: (context) => context[0].label,
              label: (context) => '$' + context.parsed.y,
            },
          },
        },
      },
    });
  });
  