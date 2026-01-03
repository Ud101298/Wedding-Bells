const events = [
  {
    title: 'Sangeet',
    details: `<b>Date:</b> 10th Feb 2026<br><b>Time:</b> 7:00 PM onwards<br><b>Venue:</b> Royal Banquet Hall, Mumbai<br><br>Join us for a night of music, dance, and celebration as we kick off the wedding festivities!`,
    img: 'https://cdn.pixabay.com/photo/2021/01/13/13/37/indian-wedding-5913492_1280.png'
  },
  {
    title: 'Haldi',
    details: `<b>Date:</b> 11th Feb 2026<br><b>Time:</b> 11:00 AM<br><b>Venue:</b> Bride's Residence, Mumbai<br><br>Let’s add a splash of yellow and joy to the wedding with the traditional Haldi ceremony!`,
    img: 'https://cdn.pixabay.com/photo/2021/01/13/13/37/indian-wedding-5913493_1280.png'
  },
  {
    title: 'Wedding',
    details: `<b>Date:</b> 12th Feb 2026<br><b>Time:</b> 6:00 PM onwards<br><b>Venue:</b> Grand Palace, Mumbai<br><br>With blessings and love, join us as we tie the knot in a traditional Indian wedding ceremony!`,
    img: 'https://cdn.pixabay.com/photo/2017/01/31/13/14/wedding-2020343_1280.png'
  }
];

const landing = document.getElementById('landing');
const invitation = document.getElementById('invitation');
const guestNameInput = document.getElementById('guestName');
const takeMeInBtn = document.getElementById('takeMeIn');
const displayName = document.getElementById('displayName');
const eventTitle = document.getElementById('eventTitle');
const eventDetails = document.getElementById('eventDetails');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');
const eventImg = document.getElementById('eventImg');

let currentEvent = 0;
let guestName = '';

function showEvent(idx) {
  eventTitle.textContent = events[idx].title;
  eventDetails.innerHTML = events[idx].details;
  eventImg.src = events[idx].img;
  eventImg.alt = events[idx].title + ' cartoon';
}

takeMeInBtn.addEventListener('click', () => {
  guestName = guestNameInput.value.trim();
  if (!guestName) {
    guestNameInput.classList.add('error');
    guestNameInput.placeholder = 'Please enter your name!';
    return;
  }
  displayName.textContent = guestName;
  landing.classList.add('hidden');
  invitation.classList.remove('hidden');
  showEvent(currentEvent);
});

guestNameInput.addEventListener('input', () => {
  guestNameInput.classList.remove('error');
  guestNameInput.placeholder = 'Enter your name';
});

leftArrow.addEventListener('click', () => {
  currentEvent = (currentEvent - 1 + events.length) % events.length;
  showEvent(currentEvent);
});

rightArrow.addEventListener('click', () => {
  currentEvent = (currentEvent + 1) % events.length;
  showEvent(currentEvent);
});

// Home button to go back to landing page
const homeBtn = document.getElementById('homeBtn');
homeBtn.addEventListener('click', () => {
  invitation.classList.add('hidden');
  landing.classList.remove('hidden');
  guestNameInput.value = '';
  currentEvent = 0;
});
