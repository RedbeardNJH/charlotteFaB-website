import './styles/App.css'

function Events() {
    return (
        <>
            <h2>Events</h2>
            <iframe
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showPrint=0&src=ZjdmNjA0ODM1ZGRhNmVlNzkwODkwZmY4OTg1YzlkYTg3MjcwMzlhOWFmNmVmN2Y2ODk3MDQ1NWJlMGI0NTA0ZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23ef6c00"
                style={{ border: 'solid 1px #777' }}
                width="1200" 
                height="800"
                frameBorder="0"
                loading="lazy"
                title="Events calendar"
            />
        </>
    );
}

export default Events;