export default `
# ACEit!

An Android App to Facilitate Children in Learning English

This project was done as in partial fulfillment of the requirements for the degree of Bachelor of Arts at Kalamazoo College.
ACEit! is under the [copyright policy of Kalamazoo College](https://reason.kzoo.edu/facultygrants/assets/Intellectual_Property_Policy_July_2003.pdf)

* SIP Advisor: Dr. Pamela Cutter
* Department of Computer Science, Kalamazoo College
* Special Thanks To: Mrs. Melanie Baker and the Hough Foundation

------

[Google PlayStore Listing](https://play.google.com/store/apps/details?id=com.jhchoe.aceit)

![screenshots four stages](https://cloud.githubusercontent.com/assets/8836645/7611428/83ca5926-f952-11e4-8041-67324c1cca05.png)
![qr code](https://cloud.githubusercontent.com/assets/8836645/7611432/89f8d390-f952-11e4-9e6f-871fe4fb43b7.png)

------

### Introduction

* Motivation
  + On April 10, 2014, I attended the Jennifer Mills Lecture by 	Professor Eileen Pollack from University of Michigan, an English Professor, discussed topics related to women in STEM. Dr. Pollack commented, “I’m talking 	about a specific issue about gender, but any of this really could happen with any minority groups.” Ever since smartphones made their appearances into our 	daily lives, I’ve been interested in the game market. What makes certain game so popular? What makes them to stay popular for a long period of time?

* Problem and Idea
  + Dr. Cutter brought up an issue that Mrs. Melanie Baker, her son’s (special education) teacher at Harper Creek Middle School had raised: there was a lack of worthy educational apps intended to teach children in early childhood how to read. To keep children motivated to play and learn, a good educational game app was needed. My passion for designing a mobile app could not have found a better cause and motivation.

### Background

* Stages of Learning
  + Visual learners and those with disabilities often begin learning to read with sight words; decoding/phonics comes later. There are essentially four distinct phases in the development of sight words:
    - Pre-alphabetic Phase
    - Partial Alphabetic Phase
    - Full Alphabetic Phase
    - Consolidated Alphabetic Phase
  + For the pre-alphabetic phase, most of children will learn to see the word, which means that they tend to memorize how the word looks like without knowing how the word is composed of multiple letters (Gaski, 1997; Ehri, 1995, 2005).
* Dolch Sigh Words
  + For the database of words, Dolch sight words ("Dolch Sight Words.", 2007) were used, which is a list consist of 220 words and 95 common nouns put together by Edward William Dolch, PhD. in 1948 	that are proven to enhance a person’s reading skill when mastered.

### Method

* Fading Technique
  + Fading technique is a proven technique to teach the sight words to the children who are mostly in the pre-alphabetic stage. The idea by using this technique, the goal is to provide a better learning experience for the children.

![fading technique](https://cloud.githubusercontent.com/assets/8836645/7611416/785de4cc-f952-11e4-884c-ae9484b69058.png)

### Difficulties

* Logical Error
  + Google speech recognition program was used for speech recognition. However, there were consistent error in recognition which eventually will lead to frustration. To engage the child to play, especially those with less clear pronounciation, a range of acceptance for an answer had to be widened.
    - eye -> I or i
    - night -> 9
    - cow -> how
* Spatial
  + Originally, three types of images per word was used; color, black-outlined, and gray-outlined. Reduced the space usage to 2/3 by overlapping black-outlined image with a View element that has background color of white, opacity of 95%.
* Images
  + Finding the right image with clear outline was a challenge.

### Future Ideas

* Engagement
  + Erase the picture to find the word underneath
  + Draw the lines through dots of a picture (dot-to-dot)
  + Ask the user to take a photo of an object (photo-hunt)
* Parent-child Interaction
  + Allow a parent to upload their own pictures into the game.
* Customizable List
  + Administrators, parents, or teachers should be able to add/remove any words into the list of the words as well as any words that are consistently get recognized incorrectly by the speech program.
* Broader Target Audience
  + This app is also able to aid adults who are learning to read English, especially for foreigners.

### References

 * Blackwell, R., & Laman, S. (2013). Strategies to Teach Sight Words in an Elementary Classroom. International Journal of Education, 5(4), 37-47.
 * Ehri, L.C. (1995). Phases of development in learning to 	read words by sight. Journal of Research in Reading, 	18(2), 116-188.
 * Ehri, L.C. (2005). Learning to read words: Theory, findings, and issues. Scientific Studies of Reading, 	9(2), 167-188.
 * Gaskin, I.W., Ehri, L.C., Cress, C., O'Hara, C., & Donnelly, K. (1997). Procedures for word learning: Making discoveries about words. The Reading 	Teacher, 50(4), 312-327.
 * Westling, David L., and Fox, Lise. “Teaching Appropriate Academic Skills.” Teaching Students with Severe Disabilities. 2nd ed. Upper Saddle River: Merrill, 2000. 388. Print.

------

The project is protected under *Creative Commons (CC) License*. More detailed parts are described below:

* *Attribution*
  + The author must be attributed as the creator of the work. Beyond that, the work can be modified, distributed, copied and otherwise used.
* *Share Alike*
  + The work can be modified, distributed and so forth, but only under the same CC license.
* *Non-Commercial*
  + The work can be modified, distributed and so on, but not for commercial purposes. The work cannot be sold or make a profit for an individual, a group, or a company.
* *No Derivative Works*
  + The modified work cannot be distributed, otherwise one can copy and distribute the licensed work. This license prohibits one from creating work based on the original.
`;
