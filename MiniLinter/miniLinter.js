let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

//Step 1
const storyWords = story.split(' ');
//Step 2
//console.log(story.length)

//Step 3
const betterWords = storyWords.filter(better => {
  if(!unnecessaryWords.includes(better)) {
    return better;
  }
});
//Step 4
let reallyCount = 0;
let veryCount = 0;
let basicallyCount = 0;
let overusedWordCount = 0;

for (word of storyWords) {
  if (word === 'really') {
    reallyCount += 1;
  } else if (word === 'very') {
    veryCount += 1;
  } else if (word === 'basically') {
    basicallyCount += 1; 
  } 
  overusedWordCount = reallyCount + veryCount + basicallyCount; 
};
//Step 5
let sentenceCounter = 0;
for (word of storyWords) {
  if (word.includes('.') || word.includes('!')) {
    sentenceCounter += 1;
  }
};
//console.log(storyWords.length);
//console.log(sentenceCounter);
//console.log(overusedWordCount);

//Step 6
/*
const logInfo = (storyWords, sentenceCounter,overusedWordCount) => {
   console.log('Word count: ' + storyWords.length + '. Sentence count: ' + sentenceCounter + '. Overused word appearances: ' + overusedWordCount + '.');
 };
logInfo(storyWords, sentenceCounter, overusedWordCount);
*/

//Step 7
//console.log(betterWords.join(' '));

function mostFrequent(arr) {
arr.sort();
let maxCount = 1, res = arr[0];
let currentCount = 1;
for (let i = 1; i < arr.length; i++) {
  if (arr[i] === arr[i - 1])
  currentCount++;
  else {
    if (currentCount > maxCount) {
      maxCount = currentCount;
      res = arr[i - 1];
    } currentCount = 1
  }
}; 
if (currentCount > maxCount) {
    maxCount = currentCount;
    res = arr[n - 1];
    }
  return res;
};
console.log(mostFrequent(storyWords));
mostFrequent(storyWords);

console.log(story);
