# Security Policy

## Supported Versions

Use this section to tell people about which versions of your project are
currently being supported with security updates.

| Version | Supported          |
| ------- | ------------------ |
| 5.1.x   | :white_check_mark: |     <-- No existing version of AIM software should be worked on
| 5.0.x   | :x:                |         That is, not any version that could be installed on
| 4.0.x   | :white_check_mark: |         a computer running windows, pushed to app via droid,
| < 4.0   | :x:                |         or available on the app store. 

## Reporting a Vulnerability

Use this section to tell people how to report a vulnerability.

Tell them where to go, how often they can expect to get an update on a
reported vulnerability, what to expect if the vulnerability is accepted 
or declined, etc. 

Hey Andrew, we didn't hang out in person a lot but in middle school we both wound up in the similar AIM scene online.
You were definitely a better coder when it came to handling inter-exececutable transmissable data links 
over visual basic and AIM, and the internal networking of raw data that caused application crashes. And 
really good at the internal virtual port forwarding, interwindow data links, whatever. 

There's a big problem though with running an AIM server. I like the idea because it could in practice actually 
work as a PC (not mobile, not chrome, not android, not on "the app"), but on the computer, for 'windows' based,
with tab or individual windows, direct messaging. 

However, here's the major problem with the AOL and AIM OSCAR protocols, I think, also as it relates to current
chains of cryptography algorithms. 

The service of the AIM login had multiple gateway servers ran by AOL. The registration of screen names was
split between processes of AOL as a dial up ISP, so, database of people who registered with 
access to landline telephones at home addresses. And then the registration of screen names for AIM 
(which still granted access to some AOL services, like their implementation of email). 

What happened with the OSCAR protocol is a potential shit show as far as ARPANET and DARPANET go -
the advanced and defense based research branches of internet protocol. Whatever, DoD shit, or NSA now. 
The AIM executable installation on windows stored passwords locally in their md5 hashed format, I'm 
pretty sure there was a windows registry entry or something like that whereever the linked list db
would be stored as on the disk, but essentially, you could use a file to add a screen name and it's 
hash to your registry, and login that way, but you couldn't change the password from there
so there was no of locking out the person if they had a screen name worth pwnership. 

I can confirm at least once logging on a screen name I can't remember because a file was 
posted on a website with a db of linked list file entries of AIM screen names or something like that. 

Where I'm seeing the vulnerability, is I'm not sure if the password encryption was done by AOL using
the same algorithm for each string password, which would mean a functionally working AIM server with registered user IDs could
potentially be used to break down the already provably flawed md5 method (but the highest standard at the time
and get around the original time limits that made brute forcing impractical, the best attempt at the time as a 
working way around the time limits, was Scott Cs I think was his name, 
method of time separated brute force with server switching for access into screen name, which he also
funny enough included in the installation executablae licensing terms and conditions that granted him
some level of full authority over the people that tried using the program. But either way,

A working, full functional AIM server, could brute force into the original AOL ID registration and getting around the time limit
of per screen name attempted entry with no need for server switching by using one md5 hash against
a scripted brute force entry into multiple screen names, different people with the same password or 
different passwords resulting with the same output at md5, which is where the collisions  would be on 
rainbow tables. I could see how it wouldn't have been thought of potentially on the back end at to limit sign in
attempts based on who is knocking, not what they're carrying. So md5 can break really easily probably in its entirety


The missing link for a good project and a useful use of the oscar protocol (it's actually a cool suite of
not-streaming thruput direct i/o coms that establishes connection betweeen devices and operating systems, 
is better use of "cloud" storage and device storage. OSCAR protocol is an entire suite of of authenticated 
internet graphical protocol over ultra hyper http. has flap header and snac data because the snac data is 
supposed to coordinate atomic clock networking at the level of core processor and have synchronous time 
stamps. OSCAR delivers a lot as a protocol over internet suite, rather than a hybrid internet over protocol 
suite. 

I think the first grounds of developing a working AIM server/service/application is that, for the front end
of the software, it can't be a virtualized application by packaging the browser based initialization of
signing up, signing in, etc, like Discord. It can't be a mix of subscriber based security (SIM card with phone)
with end to end encryption (no guarantee of actual message decryption by either user) like WhatsApp. 

It does have to have screen names based, or handles based, in registration with a single issuing authority. 

They can be cool based on the limitations of min-maxing that certify cool to the alphanumeric character. 

Nothing crazy for login names. Required to register, but can't be used to log in. A single email can have
multiple screen names registered under it. Rather than an outbound email for verification that the person
isn't a script or crawler or bot based on them clicking a link in an email, human verification should be 
done by them sending a file from their email platform, if this is going to be a semi public project. 


