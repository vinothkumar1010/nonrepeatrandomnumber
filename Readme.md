# Goal

Purpose of this javascript file is to generate random number within given range using  `window.crypto.getRandomValues` javascript function. 

Also we don't repeat the number untill we get all values from within the range.

## why ?

in my project sonar starts informing the following

Using pseudorandom number generators (PRNGs) is security-sensitive. For example, it has led in the past to the following vulnerabilities:

    CVE-2013-6386
    CVE-2006-3419
    CVE-2008-4102

When software generates predictable values in a context requiring unpredictability, it may be possible for an attacker to guess the next value that will be generated, and use this guess to impersonate another user or access sensitive information.

As the Math.random() function relies on a weak pseudorandom number generator, this function should not be used for security-critical applications or for protecting sensitive data. In such context, a cryptographically strong pseudorandom number generator (CSPRNG) should be used instead.

**Do we really need to change it ?**
 
 From sonar,

Ask Yourself Whether
* the code using the generated value requires it to be unpredictable. It is the case for all encryption mechanisms or when a secret value, such as a password, is hashed.
* the function you use generates a value which can be predicted (pseudo-random).
* the generated value is used multiple times.
* an attacker can access the generated value.
You are at risk if you answered yes to the first question and any of the following ones.

**Solution**

Again from Sonar,

* Use a cryptographically strong pseudorandom number generator (CSPRNG) like crypto.getRandomValues().
* Use the generated random values only once.
* You should not expose the generated random value. If you have to store it, make sure that the database or file is secure.

## How this utility will solve the issue ?

* We have generated Random number from cryptographically strong pseudorandom number generator
* We have instantiated class only once
* Unless untill we have get all the number within generated value, we don't repeat the number.

# How to use this utlity in your project ?

Step1: 

Import this utility into your project

    import NonRepeatRandomNumber from "pathforutility"

Step 2:

Pass the minimum and maximum value arguments 

    let nonRepeatNumber = NonRepeatRandomNumber.getRandomNumber(minimumvalue,maximumvalue);
    const toPrize =nonRepeatNumber.get();


