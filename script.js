const jobListings = [
    { title: 'Web Developer', company: 'QuirkyQuokka Creations', location: 'Chicago', description: 'Good Web Developer' },
    { title: 'Graphic Designer', company: 'WittyWhisker Enterprises', location: 'Houston', description: 'Good Graphic Designer' },
    { title: 'Software Developer', company: 'GiggleGrove Innovations', location: 'Atlanta', description: 'Good Software Developer' },
    { title: 'UX Designer', company: 'SnazzySnail Solutions', location: 'Austin', description: 'Good UX Designer' },
    { title: 'Mobile App Developer', company: 'FunkyFrog Ventures', location: 'Houston', description: 'Good Mobile App Developer' },
    { title: 'IT Project Manager', company: 'SillySquirrel Studios', location: 'Atlanta', description: 'Good IT Project Manager' }
];

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const keywords = document.querySelector('input[name="keywords"]').value.trim().toLowerCase();
    const location = document.querySelector('input[name="location"]').value.trim().toLowerCase();
    const company = document.querySelector('input[name="company"]').value.trim().toLowerCase();
    
    if (keywords === '' && location === '' && company === '') {
        alert('Please enter at least one search criteria.');
        return;
    }

    const filteredJobs = jobListings.filter(job => {
        return (keywords === '' || job.title.toLowerCase().includes(keywords)) &&
               (location === '' || job.location.toLowerCase().includes(location)) &&
               (company === '' || job.company.toLowerCase().includes(company));
    });

    let searchResults = '<h2>Search Results</h2>';
    if (filteredJobs.length > 0) {
        searchResults += '<ul>';
        filteredJobs.forEach(job => {
            searchResults += 
                '<li>' +
                    '<h3>' + job.title + '</h3>' +
                    '<p>Company: ' + job.company + '</p>' +
                    '<p>Location: ' + job.location + '</p>' +
                    '<p>Description: ' + job.description + '</p>' +
                    '<a href="#">Apply Now</a>' +
                '</li>';
        });
        searchResults += '</ul>';
    } else {
        searchResults += '<p>No job listings found.</p>';
    }
    
    document.querySelector(".job-listings").innerHTML = searchResults;
});
