const fs = require("fs");
const path = require("path");

// Sample input data
const input = [
  {
    Title: "Will I be able to tolerate the side effects of chemotherapy?",
    "TEXT (RECORDED/ SCRIPT)": [
      "Facing chemotherapy can be a daunting and anxiety-inducing experience. Let me assure you that is completely normal to feel worried and uncertain about what lies ahead. The fear you're experiencing about chemotherapy side effects often stems from a combination of factors. When you worry about enduring the side effects of chemotherapy, it's not just about the physical discomfort. These fears often connect to deeper concerns about loss of control, vulnerability, and the unknown. Chemotherapy can bring side effects like nausea, fatigue, hair loss, and more, which can feel overwhelming. The fear of these side effects can tap into fundamental anxieties about your body and its ability to cope with illness and treatment.",
      "This fear originates from several sources.",
      "Firstly, there's the fear of the unknown – not knowing exactly how your body will react to the treatment can be unsettling.",
      "Additionally, hearing about potential side effects from others or reading about them online can amplify these fears, or sometimes even warnings from healthcare professionals paint a daunting picture and create a sense of anticipation and dread.",
      "Moreover, chemotherapy is often associated with significant physical changes and discomfort, which can contribute to feelings of anxiety and apprehension.",
      "Entertaining this fear can have significant consequences. When you're caught in a cycle of worry, it can heighten your stress levels and impact your mental health. High stress can weaken your immune system, making it harder for your body to cope with both the cancer and the treatment. It can also lead to avoidance behaviors, such as delaying the start of chemotherapy or not adhering to the treatment plan, which can negatively affect your prognosis.",
      "If you hide these fears, it can further complicate things. Keeping your worries to yourself can lead to feelings of isolation and loneliness. You might feel like you have to put on a brave face for your loved ones, but this can be exhausting and emotionally draining. Unexpressed fears can also escalate, turning into anxiety or depression, which can significantly impact your overall well-being.",
      "So, what can you do now? Here are some steps to help you manage your fear of chemotherapy side effects and take charge of your treatment:",
      "While a major part of the cancer journey remains unpredictable, I hope it helps to know that you are not alone in this, there is strength in knowing that others have faced this challenge and have come out on the other side. You are right in thinking that we cannot control aspects such as how the treatment interacts with you, but let's highlight the things you can exert some influence over, such as educating yourself about the treatment: this can come from recommended resources, maintaining healthier habits to keep stress response in check such as staying hydrated, eating a nutritious diet, getting plenty of rest, and engaging in gentle exercise when possible, you can also decide to be surrounded by things and people that make you happy. When faced with a heap of uncertain outcomes, it is helpful to focus on what you can control.  This helps with keeping the feelings of helplessness at bay and gives you a sense of empowerment. While you may not be able to control the side effects themselves, you can take proactive steps to manage and minimize them.",
    ],
    "TECHNIQUE/ FRAMEWORK": [
      "Do you know what cures anxiety?: Taking away the 'I don't know.' In every form of treatment, it is important to advocate for yourself. Self-advocacy may seem scary to some. It can feel intimidating to speak up to your doctor and caregivers. With a better understanding of diagnosis and treatment options, results in an open, honest and collaborative treatment schedule.",
      "Remember ACTS:",
      "1. ASK: Note down questions for caregivers and doctors, as many as you can think of, read and take the doubts to your doctors. It is when we ask questions that we may find the nuanced information we seek.",
      "2. CARE: Ensure the quality of care standards you want are met and maintained. You can always ask for the right amount of care you require.",
      "3. TIME: Some decisions are big and hence it's okay to ask for time, for consultations, to understand the issue better or to consider all information well.",
      "4. SUPPORT: We don't have to fight battles alone. Who's your support system, what help can you ask them, it is okay to ask for help and support.",
    ],
  },
  {
    Title: "What is the point of this suffering",
    "TEXT (RECORDED/ SCRIPT)": [
      "When facing a serious illness like cancer, it's not unusual to feel overwhelmed and question the meaning and purpose behind your pain. I want to talk to you about a difficult but very common feeling that many people with cancer experience—hopelessness and the thought that there’s no point to the suffering.",
      "And then this suffering often leads us to search for meaning and purpose in our experiences, particularly when those experiences are challenging and difficult to understand. When confronted with a diagnosis like cancer, it's common to question why this is happening to you and what you're supposed to learn or gain from the experience, not helping instead adding another layer of pain. We are conditioned to believe that when there is pain there will be reward, it only feels right. With a condition like cancer, the end results, the recovery, getting better, pain going away is a process and may not immediately equal to the end result making it feel like a lost game.",
      "First, it's important to recognize that feeling hopeless and questioning the point of your suffering is a natural response to a very challenging situation. This is a profound and existential concern, and I want you to know that it's completely natural to wrestle with such questions in the face of adversity. You might feel overwhelmed by the unfairness of your situation and wonder if there's any meaning to be found in your suffering. These emotions are valid and important to acknowledge as you navigate this difficult journey.",
      "It's crucial to normalize these experiences. You are not alone in feeling this way. Many people undergoing cancer treatment grapple with similar thoughts and emotions. It’s a testament to the severity of what you're facing, and acknowledging this can be the first step towards finding a way through.",
      "Give yourself permission to explore these questions at your own pace, and know that it's okay to not have all the answers right away. You're on a journey of self-discovery and growth, and I'm here to support you every step of the way. One of the most effective ways to manage this overwhelming feeling is to break it down into smaller, more manageable pieces.",
    ],
    "TECHNIQUE/ FRAMEWORK": [
      "Let me tell you a story: Maya a dedicated teacher and a helpful friend battled chronic pain, a constant companion. Despite her best efforts to manage the pain, it persisted, casting a shadow over her daily life and leaving her feeling exhausted and defeated. As the years passed, Maya's pain remained a constant companion, but she refused to let it define her. Instead, she focused on the areas of her life that brought her joy and meaning—the laughter of her students, the beauty of her artwork, and the warmth of her loved ones.",
      "Take a moment to think, like Maya, what brings you joy? What are some hobbies you would like to pursue?",
      "While the nature of the difficulty may not go down, we add to it moments that can bring joy.",
    ],
  },
  {
    Title: "Will my partner still find me attractive after the surgery?",
    "TEXT (RECORDED/ SCRIPT)": [
      "The thought of how your partner will perceive you after surgery likely stems from a combination of factors. Firstly, there may be a fear of change and uncertainty about how your body will look and feel post-surgery. It’s completely normal to worry about changes in your body and how they might impact how you see yourself and how you believe others might see you. I want to take this opportunity to address these concerns and provide some perspective on body image issues related to cancer treatment.",
      "Cancer and its treatments can undoubtedly bring about significant changes to your body. Surgery, chemotherapy, radiation, and other treatments often leave visible marks—scars, hair loss, changes in skin texture, and weight fluctuations, to name a few. These changes can be challenging to accept, particularly in a society that places a high value on conventional standards of beauty.",
      "Society often places a strong emphasis on physical appearance and beauty standards, which can contribute to feelings of insecurity and self-doubt. You may worry about whether your partner will still find you attractive and desirable, and whether your relationship will be affected by changes in your physical appearance. this concern may lead to a state of heightened self-awareness and self-consciousness as you grapple with questions about your self-worth and value in your relationship. Many individuals facing surgery, particularly those undergoing cancer treatment, grapple with similar concerns about their appearance and how it will impact their relationships. It's important to remember that your worth and value as a person are not defined by your physical appearance, and that your partner's love and attraction to you go far beyond superficial characteristics.",
      "Worrying about your appearance does not make you vain or superficial; it makes you human. Our bodies are an integral part of our identities, and changes to them can feel like a threat to that identity. However, it’s important to remember that these changes are a testament to your strength and resilience. They tell the story of your battle and survival, a narrative of courage that deserves respect and honor.",
      "It’s true that your body might not look exactly the same as it did before your treatments. But these changes are not inherently negative. They are new and different, which can be unsettling, but they are also a sign of your body’s incredible capacity to endure and heal. Your body has been through so much, and it’s still here, fighting for you every day.",
      "Here’s how you can start to shift your perspective and slowly accept your new look:",
    ],
    "TECHNIQUE/ FRAMEWORK": [
      "For this exercise, grab a paper and pen. Together, we are going to make a poster. On a paper draw a bucket. This is the bucket of 'Awesomeness' Drops, small and big fall into this bucket. What makes you awesome? Label the drops. Here are some examples:",
      "1. A fantastic friend",
      "2. A good listener",
      "3. Always follows through",
      "4. Learns from mistakes",
      "See, there's so much that makes you you. And all of this together makes you attractive!",
      "Now put this poster where you can see it, lest you forget",
      "As you move forward with your treatment and recovery, remember that your worth is not defined by your appearance. You are a whole person, with a unique and valuable story. Your body is a remarkable testament to your journey, and while it may change, it remains a powerful part of who you are.",
    ],
  },
  {
    Title: "What if none of this works out?",
    "TEXT (RECORDED/ SCRIPT)": [
      "You know that feeling when you're a kid and you've studied hard for a big test at school? You know you've done your best, but you're still nervous about what your grade will be. While waiting for the results, you start thinking about what will happen if you don't get the grade you hoped for. You imagine how you might need to study differently next time, or how you'll explain it to your parents. That worry of \"What if I don't do well?\" keeps swirling in your mind.",
      "Even though we might be certain to an extent that we have done well, isn't it rather comforting to think that we haven’t? It is weird right but also it is true!",
      "Cancer is the big test of life and we know the big question that comes along with it- “What if none of this works out?”. It is a very valid question and obviously a possibility that we think of but have we ever questioned ourselves about “What if we do well in that exam?”, “What if we get that job?”, “What if our treatment works out?” It is normal for us to do this and it is very common because thinking about positive outcomes can feel risky because it sets up expectations. If those expectations aren't met, the disappointment can be painful. Focusing on negatives feels like a way to protect ourselves from this hurt and what we might be experiencing is called the Negativity Bais, a tendency to focus more on negative possibilities and outcomes than on positive ones. It's a natural part of how our brains evolved to help us stay alert to potential dangers and problems. When you're dealing with a challenging situation like cancer, this bias can become more pronounced, leading you to dwell on worst-case scenarios and negative outcomes. Focusing on the possibility that \"none of this works out\" can make you feel anxious, helpless, and discouraged. It can create a sense of impending doom and make it difficult to stay hopeful and motivated throughout your treatment journey.",
      "So should we keep focusing on the negatives? Absolutely not, it is normal to do so but not the right thing because once we start anticipating the negatives we start a chain of negative feelings and actions that follow the negative thought : “What if the treatments don’t work”- you start feeling anxious, you are nervous, you are scared, you go in to treatments with dejection, stress, and that in turn affects your treatment and the cycle continues! So let me help you break this cycle by guiding you towards following these simple steps:",
      "Step 1: Grounding and Calming Techniques",
      "Before addressing your thoughts, it’s crucial to calm your mind and body. Here's a simple grounding exercise:",
      "Find a Quiet Space: Sit or lie down in a comfortable, quiet place where you won't be disturbed.",
      "1. Focus on Your Breathing:",
      "2. Engage Your Senses:",
      "-Sight: Look around and name five things you can see.",
      "-Touch: Name four things you can touch. Feel the texture of each one.",
      "-Hearing: Name three things you can hear.",
      "-Smell: Name two things you can smell.",
      "-Taste: Name one thing you can taste (even if it’s just the inside of your mouth).",
      "This exercise can help you feel more present and in control.",
    ],
    "TECHNIQUE/ FRAMEWORK": [
      "Step 2: Understanding Your Thoughts",
      'It\'s common to feel overwhelmed by "what if" thoughts, especially when facing a cancer diagnosis and treatment. Here’s a way to break down and understand these thoughts:',
      "1. Acknowledge Your Feelings: It's okay to feel scared, anxious, or uncertain. These feelings are valid and a natural response to your situation.",
      '2,Write Down Your Thoughts: Take a piece of paper and write down all your "what if" thoughts. Seeing them in writing can make them feel more manageable.',
      'Step 3: A Strategy to Manage "What If" Thoughts',
      "One effective strategy is Cognitive Reframing. This helps shift your perspective on negative thoughts. Here’s how you can do it:",
      '1. Identify the Negative Thought: Look at your list and pick one "what if" thought, for example, "What if my treatment doesn’t work?"',
      "2. Challenge the Thought: Ask yourself:",
      "What evidence do I have that this thought is true?",
      "What evidence do I have that it’s not true?",
      "Am I jumping to conclusions without considering all the facts?",
      "3. Reframe the Thought: Turn the negative thought into a more balanced one:",
      'Negative: "What if my treatment doesn’t work?"',
      'Reframed: "While there\'s uncertainty, many treatments have helped others, and my medical team is doing everything they can for me."',
      "4. Focus on What You Can Control: Instead of dwelling on the uncertainty, focus on actions you can take:",
      "Follow your treatment plan.",
      "Communicate with your healthcare team.",
      "Take care of your physical and mental health (e.g., eating well, getting rest, engaging in enjoyable activities).",
      "5. Positive Affirmations: Create positive statements to counteract your negative thoughts:",
      '"I am strong and capable."',
      '"I am doing my best, and that is enough."',
      '"I am supported and loved."',
      "Step 4: Practice and Patience",
      "Changing your thought patterns takes practice. Be patient with yourself as you work through these steps. It’s okay to seek support from friends, family, or support groups.",
      "Facing the uncertainty of cancer is incredibly tough, but remember, you don’t have to do it alone. Ground yourself with calming exercises, understand and challenge your thoughts, and focus on what you can control. You are stronger than you know, and every small step you take is a step towards managing your thoughts and emotions more effectively.",
      "Keep breathing, stay present, and remember—it's okay to reach out for support. You are not alone in this journey.",
    ],
  },
  {
    Title: "Nothing is fun anymore",
    "TEXT (RECORDED/ SCRIPT)": [
      "Hospital visits, chemo, medicines, treatments,. Hospital visits, chemo, medicines, treatments. Life nowadays seems to be limited to these Cancer related things  right? Nothing to look forward to anymore? Nothing seems to be fun anymore?",
      "I hear you and I can understand how that feels! It feels like you are living in a square and leading a mechanical life because we are fighting cancer and that is a big one to deal with! But wait a minute, who told us that it has to be this way? Yes, cancer is scary and something which no one takes lightly but that doesn’t mean we can’t have our fun while taking precautions and being careful?",
      "Let me take you on this guided imagery with me: See that white wall in front of you? Stare at it and as you are staring at it take 3 deep breaths with me, inhale through your nose and exhale through your mouth! That’s good! Now, on that white wall in front of you, paint a mental image of your favourite place- could be your bed, your room, a beach, a mountain, a cliff where there is just the scent of nature in the atmosphere and cool breeze hitting your face, any place where you feel you! Stay there, picture: what you are doing there, are you alone? Are you with people you love? Are you enjoying the moment doing your favourite thing and being it your favourite place? Stay there for however long you want! Slowly, start looking at that picture from an outsider and come back to the present slowly and steadily.                                                                                                                Notice how you are feeling? Do I sense a smile on your face? A sense of calmness and relief? There, we just created your happy place and triggered some dopamine, serotonin and endorphins to fuel in some rejuvenation! Wasn’t that easy? We don’t need to spend hours of time and effort to find joy, maybe we can find it in small small things around us!",
      "Cancer doesn’t have to mean a full stop to our joys, nature, hobbies, interactions, it is just a string of commas to slow you down in your journey so that you can cope with the unfortunate negative side effects but not stop them altogether! Cancer treatments can cause physical and emotional fatigue, making it harder to enjoy activities you once loved. I need you to understand that this is a common experience among cancer patients and it is okay but we will not stop doing what gave us joy, rather we will ways to keeping doing them but in different ways and maybe here’s how:",
    ],
    "TECHNIQUE/ FRAMEWORK": [
      "1. For a minute, Let us separate cancer from ourselves, and make a detailed, specific list of activities that you want to do and make sure to include everything from maybe reading to trekking to partying to going on dates with friends or partner.                                                                                                                               2. On a scale rank these activites on the priority basis- what are things you want to do first, which seem more fun what are things you want to do everyday and incorporate it in your routine and what are one time things.                                                                                                                                                    3. Now, as fun and excited we are, remember to keep checking in with your bodies to scan and see how much can our bodies take in with all the treatments and tiredness because we dont want to exert ourselves too much.                                                                                                                                             4. Once you have the ranked list ready, start breaking down and planning your activities. For example: Date with partner                                                                                                                            a. How are you feeling that day to go out?                                                                                                                           b. Ask your partner and decide on a time and place.                                                                                                   c. Pick out your outfit, make sure to take your meds and everything else required and then go and enjoy yourself!                                                                                                                                                                   5. Repeat these for all the activities and all that is reuqired is just for you to plan and remind yourself that you can yet do it all with just a little planning and checking in with yourself, your doctors and your loved ones !",
      "It's important to remember that it's okay to take things one step at a time. Finding joy may not happen overnight, but by gradually incorporating small, enjoyable activities into your routine, you can begin to rediscover a sense of pleasure and purpose. Reach out for support from your doctors, loved ones, or a counsellor if you need help navigating through this journey because you are not alone, and there are many ways to find moments of joy and connection even during challenging times.",
    ],
  },
  {
    Title: "My life has become all about cancer!",
    "TEXT (RECORDED/ SCRIPT)": [
      "Cancer feels like an institution like a school or college where we have to follow their rules and regulations and be at our best behaviour! At some or the other point in life, we did dislike things about the institution or at times the institution itself and because we couldn’t do much about it, we would complain about it, cry about it and continue to go on with it until one day when we graduated from it!",
      "I understand that you’re feeling hopeless and overwhelmed, as if your life has become entirely consumed by cancer and its associated treatments and issues. These feelings are deeply valid and many others in similar situations share them. Let’s explore these feelings and thoughts together to help you understand them better and find a path toward reclaiming a sense of hope and balance.",
      "First, it’s important to acknowledge that a cancer diagnosis and subsequent treatment can indeed become a central focus of your life. The thought that your life has become entirely about cancer likely stems from this intense focus that a cancer diagnosis brings to your daily existence. The demands of medical appointments, treatments, and managing side effects can leave little room for other aspects of life that once brought you joy and fulfillment. I can understand how life right now must feel like all about treatments and medications and check ups and because you have to go through it, it feels painful and maybe even frustrating where you go down a spiral of thoughts and feelings of why me? I don’t want to do this anymore, I don't deserve any of this, and you are upset and angry and scared and many more things!",
      "This thought process can stem from several factors. One major factor is the sheer amount of time and energy required to navigate your treatment. Medical appointments, treatments, and the physical side effects can dominate your schedule and sap your energy. Additionally, the emotional burden of coping with a serious illness can create a sense of tunnel vision, where it feels impossible to focus on anything other than your health.",
      "These thoughts reflect a significant shift in your daily life and priorities. It indicates that cancer has taken over many aspects of your life, overshadowing other interests, activities, and relationships that once were important to you. It’s a sign that you’re yearning for a more balanced life where you can still engage in activities and relationships that bring you joy and fulfillment. It can make you feel overwhelmed, frustrated, and trapped. You might experience a sense of loss for the life you had before your diagnosis, leading to feelings of sadness and isolation. It can also cause you to feel disconnected from your sense of self and your identity beyond being a cancer patient which could in turn demotivate you to continue your treatment anymore while it is okay for you to feel all this but this would also means that cancer is not defining who you are, it is just a part of you but not you and for this to sink in I need you to get in touch with the version of you before the diagnosis.",
      "Let’s delve into some cognitive distortions that might be influencing your current thought patterns. Cognitive distortions are irrational or exaggerated thought patterns that can negatively affect your perception of reality. Here are a few you might be experiencing:",
      "All-or-Nothing Thinking: This involves seeing situations in black-and-white terms. You might be thinking, “If I can’t live my life the way I used to, then my life is all about cancer.” This type of thinking can make it difficult to recognize any positive aspects or moments of normalcy that still exist in your life.",
      "Mental Filtering: This is when you focus only on the negative aspects of a situation and ignore any positives. You might find yourself thinking, “My entire day is filled with pain and appointments,” without acknowledging any moments of relief or support from loved ones.",
      "Catastrophizing: This involves expecting the worst possible outcome. You might be thinking, “My life will always be like this,” which can escalate your sense of hopelessness and despair.",
      "The feelings associated with these cognitive distortions can include deep sadness, frustration, and a sense of being trapped. These feelings can lead to behaviors such as withdrawing from social activities, losing interest in hobbies you once enjoyed, or feeling disconnected from loved ones.",
      "It’s crucial to recognize how these feelings of hopelessness can impact your overall treatment experience. Persistent feelings of despair can affect your mental health, leading to increased stress and anxiety, which in turn can make it more challenging to cope with the physical demands of treatment. This emotional burden can also diminish your motivation to adhere to your treatment plan or engage in self-care activities that are vital for your well-being.",
    ],
    "TECHNIQUE/ FRAMEWORK": [
      "When cancer seems to dominate every aspect of your life, it's important to find ways to reclaim your identity and find joy in other areas rather than dwelling and upsetting ourselves, we could just practice these small steps to help us understand a sense of normalcy:",
      "1. Make a List: Write down activities you enjoyed before your diagnosis or new things you’d like to try. This could be reading, painting, gardening, cooking, or even simple things like watching your favorite movies.                                                                                                                             2. Once you have a list, choose a few activities or interests that you feel you can realistically integrate into your current life. Pick ones that are most meaningful to you and that you miss the most.                                                                                                        3, Be mindful of how much your boday can take on and preventing yourself from getting exhausted, set small, achievable goals for re-engaging with these activities. For example, if you enjoyed reading, set a goal to read for 10 minutes each day. If spending time with friends is important, aim to have a phone call or a short visit once a week.                                                                                                                                     4, Take this is an experiemntal project, where you explore every interest and hobby of yours. That way you get to try something new frequently and also spending time doing things that you like giving you a sense of normalcy.                                                           5. Regularly review your list and goals. As your energy levels and circumstances change, adjust your activities to ensure they remain enjoyable and manageable. Add new activities to your list as you discover new interests or revisit old ones by also taking breaks to rest and replenish in between.                                                                            Remember, you are more than your diagnosis, and there are still many aspects of life to explore and enjoy because isn't life all about finding joy in small things! So yes, let's show cancer that we are much more than that and we can yet be happy even when we are fighting!",
      "Remember, it’s okay to seek help and take things one day at a time. Your journey is unique, and while it may feel overwhelming now, there are ways to reclaim aspects of your life that bring you joy and fulfillment. Please reach out if you need further support or someone to talk to. Your well-being is our priority, and together, we can navigate this challenging period.",
    ],
  },
  {
    Title: "I am losing everything I knew and had",
    "TEXT (RECORDED/ SCRIPT)": [
      'I understand that you are struggling with a profound and overwhelming thought: "I am losing everything I knew and had." This feeling of loss is a deeply human response to the life-altering experience of a cancer diagnosis, and I’d like to offer some understanding and guidance to help you navigate through this challenging time.',
      "Cancer is associated with loss because cancer brings a lot of changes, and it’s normal to feel like you’re losing your old life. Your body may not feel like your own. Treatments can change your appearance and how you feel physically like losing weight and losing hair can make you uncomfortable; You might feel like you’ve lost your emotional balance, swinging from hope to despair; Relationships can change. Some friends may distance themselves because they don’t know how to help, while others might become closer; Your daily routine may be disrupted by doctor’s appointments, treatments, and the need for rest.",
      "This thought can come stem from the profound sense of loss and grief that often accompanies a cancer diagnosis and treatment. It reflects the dramatic changes in your life, like the ones mentioned above. The thought of losing everything you knew and had likely stems from the significant changes that cancer brings into your life. Your daily routines, physical abilities, relationships, and even your sense of self can be dramatically affected by the diagnosis and treatment. The stability and predictability of your life have been disrupted, leading to a sense of loss and uncertainty. This sense of losing everything familiar can be deeply unsettling, highlighting the stark contrast between your past and present realities. It signifies a mourning of the life you once had and the uncertainty of what lies ahead. It is natural the this sense of loss can make you feel sadness, grief, and despair. It may lead to a sense of helplessness and disorientation as you grapple with the changes and the loss of control over your life. The feeling of losing what was once certain and stable can also create a profound emotional pain and contribute to a sense of isolation and fear about the future.",
      "The primary emotion behind this thought is grief. Grief for the life you had before your diagnosis, for the sense of normalcy and control that now feels out of reach, and for the plans and dreams that might seem uncertain. This grief can be accompanied by feelings of fear, sadness, anger, and sometimes a deep sense of loneliness. The psychological concept at play here is the grieving process, which includes denial, anger, bargaining, depression, and acceptance. These stages are not linear, and you might find yourself moving back and forth between them.",
      "The behaviors that can arise from these emotions are varied. You might find yourself withdrawing from social interactions, feeling disconnected from loved ones, or losing interest in activities that once brought you joy. Alternatively, you might feel compelled to overextend yourself in an attempt to regain some sense of normalcy and control, which can lead to exhaustion and burnout.",
      "These behaviors and emotions can significantly impact your treatment. Withdrawal and isolation can lead to feelings of depression and anxiety, which can weaken your immune system and overall resilience. Overextending yourself can lead to physical and emotional exhaustion, making it harder for your body to cope with the demands of treatment. Additionally, these emotional states can affect your ability to adhere to treatment protocols and communicate effectively with your healthcare team.",
      "Understanding the psychological concept behind these feelings is essential. The sense of loss you are experiencing is a natural part of the human response to significant life changes. It is part of the grieving process, where you are mourning the loss of your previous life and adapting to a new reality. This process is deeply personal and can be challenging, but it also offers opportunities for growth and finding new sources of strength and meaning.",
      "When everything feels out of control, it’s helpful to focus on what you can control. Focus on what your body can do rather than what it can’t. It is normal to feel the loss but in reality you are gaining a newer, stronger and a resilient version of you where you have the support of your friends, families, your doctors, who play your cheerleaders in this game. Along with focusing on what is in our control, we can also look to find a new meaning. Looking for ways to create new meaning and purpose in your life despite the changes. This might involve setting new goals, finding new hobbies, or engaging in activities that bring you joy and fulfillment. Things can get overwhelming but remind yourself that you don't have to go through it alone, be it counsellors or loved ones, they will always have your back and keep pushing you forward!",
    ],
    "TECHNIQUE/ FRAMEWORK": [
      "This simple strategy can help you focus on what you can control and let go of what you cannot:",
      "Draw Two Circles: On a piece of paper, draw a small circle- (control circle) inside a larger circle-(no control circle)                                                                                                                                                                                                                1. Identify Your Concerns: List your current worries or concerns.",
      "2. Categorize: Place each concern in the appropriate circle.",
      "Inner Circle (Control): Write down everything you can control within the inner circle like Managing your diet, taking prescribed medication, attending therapy sessions.",
      "Outer Circle (No Control): Write down everything you cannot control in the outer circle like The type of cancer, how your body responds to treatment, others' opinions.",
      "Action Plan: For items in the inner circle, create an action plan. What steps can you take to address these concerns?",
      "Acceptance: For items in the outer circle, practice acceptance. Acknowledge these are beyond your control and try to release the associated stress by talking to someone you trust about how you’re feeling. Sometimes just sharing can lighten the load;",
      "Remember that is it important you Celebrate small victories, like walking a short distance or eating a healthy meal; It’s okay to feel a range of emotions. You can always Communicate openly with friends and family about what you need. Let them know it’s okay to ask questions and that you value their support; try to establish a new routine that includes rest, enjoyable activities, and time with loved ones. Even small routines can provide a sense of normalcy because at the end of the day little by little, a little becomes lot!",
    ],
  },
  {
    Title: "I am just so angry with life",
    "TEXT (RECORDED/ SCRIPT)": [
      "When faced with a cancer diagnosis, it's natural to experience a range of intense emotions. These emotions can often be understood through the lens of the stages of grief. You may question but I am not grieving anything, let me take you through an example- When we were kids and we really wanted that one chocolate from that shop where your mom was shopping from and when you asked for it, she outrightly said no. Do you remember how that made you feel? Yes, we started crying, we might have started throwing \"tantrums\" but can we agree that we were just sad and angry that she din't buy us that chocolate and for no valid reason that made sense to us.                                                                                      What you are going through right now is also trying to make sense of cancer which came into your life unexpectdely and during this process we undergo and lot of stages of processing it which we could understand better with the 5 stages of grief, it's called the DABDA:",
      "Denial- “This can't be happening to me.\" The moment where you are in disbelief that cancer was diagnosed in you.",
      'Anger- "Why me? This is so unfair!". This would be our "tantrum" throwing stage because none of this makes sense and you are clueless as to why it\'s happening to you.',
      'Bargain- "If only I had done this differently..." The moment where we have started our journey reluctantly towards the acceptance of  cancer where we introspect and retrospect our actions.',
      'Depression- "I just don’t see the point in anything anymore." In a way we are surrending and stop this fight in ourselves to find answers and go towards the last stop of',
      'Acceptance- “This is my reality now, and I can face it." Where we now equip ourselves to fight this battle.',
      "And right now, maybe we are at the anger stage and reading the acceptance stage might make you even more angry. It is okay. You can be angry for however long you wish to be angry for- a week, a month, a year? And it is justifiable in every sense because that one 6 letter word is making changes in your life, you could have never thought about. The feelings of displacement, frustration, helplessness is all what leads to feel this anger where all our minds search for are answers and because we don't get sure shot answers, we let it all out as anger.",
      "Do you think decisions made when you are angry are the right ones? Once we have let all the anger sink in, i quickly would like to bring our attention to the fact that unfortunately this diagnosis was outside of our control and we cannot go back in time and reverse this even though we really want to so it would be important to focus our attention on the things we can control like our response to this diagnosis which is anger.",
    ],
    "TECHNIQUE/ FRAMEWORK": [
      "Once we feel grounded and focused, we could start finding ways to let this anger find better outlets which could be :",
      "Talking It Out: Share your feelings with a trusted friend, family member, or counselor. Sometimes, just talking about your anger can lessen its intensity.",
      "Writing It Down: Keep a journal where you can freely express your thoughts and feelings. Writing can be a therapeutic way to release pent-up anger.",
      "Physical Activity: Engage in light exercise, like walking, yoga, or stretching. Physical activity can help release tension and improve your mood.",
      "Creative Outlets: Try painting, drawing, or playing a musical instrument. Creative activities can serve as an emotional release and provide a distraction.",
      "Being Kind to Yourself: Understand that anger is a normal part of the healing process. Treat yourself with the same kindness you would offer a friend.",
      "Yes, we don't need fancy, structured techniques to help you resolve that anger, by grounding yourself, understanding your anger, talking it out, letting out your pent up feelings by writing, painting, and being kind to yourself you can manage your anger more effectively. Remember, it's okay to feel angry, but finding healthy ways to cope can help you navigate this challenging time with greater ease.",
    ],
  },
  {
    Title: "Everything makes me uncomfortable, I can't eat, I can't sleep, ",
    "TEXT (RECORDED/ SCRIPT)": [
      "I understand that you’re feeling extremely uncomfortable, struggling to eat or sleep well, and experiencing a deep sense of tiredness and exhaustion. These feelings are profoundly challenging, and it’s important to address them with empathy and understanding. Let’s explore these feelings together, decode the thought processes behind them, and find a way to navigate through this difficult time.",
      "Acknowledge that feeling uncomfortable, unable to eat or sleep, and constantly tired are common experiences for cancer patients. It's okay to feel this way, and it's important to recognize that you're not alone in your struggles. Take a moment to reflect on what may be contributing to these feelings – it could be physical symptoms, emotional stress, or a combination of factors. Imagine this state to be a disorganised wadrobe, where everything is just stuffed and when you open it, it all comes falling out. Similarly, when undergoing the cancer treatments there are so many things that we are just compartmentalising- our feelings of fear, tiredness, frustration, anger; our thoughts- \"when will it all get better?\", \"what is this doesn't work out?\"; and when that day comes where to open it, it all just comes falling out and you are left feeling overwhelmed.",
      "Your discomfort and struggles with eating and sleeping likely stem from a combination of physical, emotional, and cognitive factors. The treatments for cancer, such as chemotherapy, radiation, and medications, can have significant side effects that disrupt your body’s normal functions. These physical changes can lead to cognitive biases, which are irrational or exaggerated thought patterns that can negatively impact your perception of reality.",
      "One common cognitive bias you might be experiencing is catastrophizing. This involves expecting the worst possible outcome. You might be thinking, “I’ll never feel comfortable again,” which can escalate your sense of discomfort and hopelessness. Another cognitive bias is overgeneralization, where you draw broad, negative conclusions based on a single event or limited information. You might be thinking, “Since I can’t sleep or eat well now, I’ll always feel this way.”",
      "These cognitive distortions can give rise to a range of emotions, including frustration, anxiety, and sadness. The feelings of frustration may stem from the inability to control your physical symptoms and the disruption of your daily routine. Anxiety can arise from worries about your health and the future, while sadness can result from the cumulative impact of your illness and treatment on your overall well-being.",
      "The physical sensations accompanying these emotions can include fatigue, muscle tension, and gastrointestinal discomfort. You might also experience a lack of appetite or nausea, making it difficult to eat, as well as racing thoughts or restlessness that interfere with your ability to sleep.",
      "These feelings and thoughts can significantly impact your treatment process. Persistent discomfort and exhaustion can lead to decreased motivation to adhere to your treatment plan or engage in self-care activities. Additionally, high levels of stress and emotional distress can weaken your immune system and potentially hinder your body’s ability to heal and respond to treatment.",
      "Remember, it’s okay to seek help and take things one day at a time. Your journey is unique, and while it may feel overwhelming now, there are ways to reclaim aspects of your life that bring you joy and fulfillment. Please reach out if you need further support or someone to talk to. Your well-being is our priority, and together, we can navigate this challenging period.",
    ],
    "TECHNIQUE/ FRAMEWORK": [
      "By identifying the source of your discomfort, you can begin to address it more effectively and for that let me help you uderstand the TAF.",
      "What is TAF? Your Thoughts- Feelings- Actions (TAF) are interconnected with each other. They are very closely intertwined. How we think influences how we feel and our subsequent actions.",
      "●For example-                                                                                                                      Thought :\"Everthing makes me uncomfortable, I can't eat, I can't sleep, I can't rest. I am just so tired of all this\"                                                                                                                                                                             Feeling   : Tired, Helpless, Hopeless, Stressed, Frustrated, Anger, etc                                        Action     : You go in to every treatment demotivated believing that this is not going to help and you feel dejected.",
      "But if we replace this negative thought with a positive thought which is also called reframing and challenging your negative thoughts-",
      '● Thought : "Everything makes me uncomfortable right now and i feel tired but i know that things will improve over time once the treatemnt starts working, i will start feeling normal again"',
      "Feeling   : Scared, Hopeful, optimistic, trusting, accepted etc                           Action     :  Go to the treatment with a positive and hopeful attitude, be accepting of the support, communicating with friends and family and people on the same jounrney as you leaving you feeling that you are not alone and that you can get through this!",
      "Just how you talk to yourself can make so much of a difference in not only your mindset but also your actions! So the next time you find yourself going through a negative thought spiral I want you to take a deep breath, accept it because it is normal to go through these and remember to replace them with one positive thought and see how it all makes a difference!",
    ],
  },
  {
    Title: "Am I going to die?",
    "TEXT (RECORDED/ SCRIPT)": [
      "I understand that you’re feeling scared of death and worried that this may be the end. These thoughts can be overwhelming, especially when coupled with the tiredness and exhaustion you are already experiencing. Let’s explore these feelings together and try to make sense of them. Understanding where these thoughts come from and how they affect you can be the first step in finding some peace and clarity.",
      "As we consider having this thought, I am reminded of the delicate dance between life and death, a dance that we all partake in, whether we realize it or not. Your fear of dying is a natural response to the uncertainty and unknown that lies ahead, but I want you to know that you are not alone in this journey. Let us start by exploring why we fear death:",
      "Imagine you are standing at the edge of a vast, uncharted wilderness. The path ahead is shrouded in mist, and you cannot see beyond the next bend. It’s natural to feel a sense of trepidation, to wonder what lies beyond the veil of uncertainty. Your fear of dying is akin to standing at the threshold of this unknown wilderness, grappling with the fear of what may lie on the other side.",
      "Humans are creatures of habit, creatures of routine. We find comfort in the familiar, in the known. The uncertainty of death disrupts this comfort state, leaving us feeling vulnerable and exposed. We fear the unknown precisely because it is unknown, because we cannot predict or control what lies ahead. The core beliefs underlying these thoughts often revolve around the fear of the unknown and the desire for control. You might have core beliefs such as “I must be in control to feel safe” or “Uncertainty is dangerous.” These beliefs can intensify your fear and make it harder to find peace.",
      "The psychology behind the fear of death is complex and multifaceted. One of the primary drivers is the concept of unfinished business, the sense that there are still things left undone or unsaid. Whether it’s unresolved conflicts, unfulfilled dreams, or relationships left unattended, the fear of leaving things unfinished can weigh heavily on the mind. Cognitive biases are irrational or exaggerated thought patterns that can distort our perception of reality. One common cognitive bias you might be experiencing is catastrophizing. Another cognitive distortion that exacerbates the fear of death is mind reading, the tendency to assume that we know what others are thinking or feeling. We may project our own fears and anxieties onto others, assuming that they share the same fears and concerns about death. Similarly, future predictions distort our perception of reality, leading us to catastrophize and envision worst-case scenarios. This involves expecting the worst possible outcome, leading you to focus on the possibility of death rather than the potential for recovery or living meaningfully despite illness. Another bias is black-and-white thinking, where you see situations in extremes. You might think, “If I have cancer, I’m going to die,” without considering the nuances and possibilities in between. These cognitive distortions can give rise to a range of emotions, including fear, sadness, and anxiety. The fear of death is a natural and deeply human response. It’s rooted in our survival instinct and the uncertainty of what comes after. Sadness can stem from the perceived loss of future experiences and time with loved ones. Anxiety may arise from the uncertainty and the feeling of having no control over the situation.",
      "The physical sensations accompanying these emotions can include a racing heart, shortness of breath, muscle tension, and fatigue. These symptoms are your body’s natural response to stress and fear. They can also contribute to feelings of exhaustion, making it harder to cope with your emotional state.",
      "These feelings and thoughts can significantly impact your treatment process. High levels of stress and emotional distress can weaken your immune system and potentially hinder your body’s ability to heal and respond to treatment. Additionally, the fear and anxiety might make it difficult to stay motivated and adhere to your treatment plan or engage in self-care activities.",
      "It’s important to acknowledge that while the fear of death is a natural response to the unknown, it is not necessarily rooted in reality. Advances in science and medicine have transformed our understanding of cancer, turning what was once considered a death sentence into a manageable chronic condition for many.",
      "While I cannot promise you certainty or control over what lies ahead, I can offer you reassurance and support. You are not alone in this journey, and we are here to walk alongside you every step of the way. Together, we will navigate the wilderness of uncertainty, finding solace in the small moments of beauty and connection that grace our path.",
    ],
    "TECHNIQUE/ FRAMEWORK": [
      "This definitely is a complicated thought journey, you can undoubtedly have a lot of emotions and upheaval. Find a clear jar or container and decorate it if desired. Throughout the day, write down any emotions you experience on small pieces of paper. Fold each paper and place it in the jar. At the end of the day or week, take a moment to reflect on the emotions you've collected.",
      "This allows you to notice all the emotions you feel and experience, and there will be some nice ones in there too, it helps to remind you of the finer and kinder moments in life as well.",
    ],
  },
  {
    Title: "Everything is getting harder day by day",
    "TEXT (RECORDED/ SCRIPT)": [
      "Now, let's explore the psychology behind the challenges you're facing. Challenges are like waves in the ocean, some small and gentle, others big and daunting. While challenges can motivate us to grow and adapt, they can also make us feel inadequate or overwhelmed. It's natural to feel this way, especially when facing something as significant as a cancer diagnosis.",
      "However, amidst the tumultuous waves of challenges, there are islands of solace that can provide refuge and respite. These islands can take the form of people or places that offer comfort, support, and understanding. They allow you to rest, recharge, and find some mental calmness amidst the storm.",
      "The purpose of these islands is not to shield you from the challenges you're facing, but rather to provide a safe haven where you can gather your strength and find moments of peace. They remind you that you are not alone in this journey, and that there are people who care about you and are here to support you through the rough seas.",
      "Now, let's talk about how we can change the perspective on these challenges. Instead of viewing them as insurmountable obstacles, try to see them as opportunities for growth and learning. Every challenge you face is an opportunity to discover your inner strength and resilience, to learn new coping strategies, and to deepen your understanding of yourself and the world around you.",
      "One technique that can help change your perspective on challenges is reframing. Reframing involves looking at a situation from a different angle or perspective, focusing on the positives rather than the negatives. For example, instead of seeing your cancer diagnosis as a setback, try to see it as an opportunity to prioritize your health and well-being, to cherish moments with loved ones, and to appreciate the beauty and fragility of life.",
      "Remember, challenges are a natural part of life, but they do not define who you are. You are strong, resilient, and capable of weathering any storm that comes your way. And remember, you are never alone in this journey. There are people and places that offer support and solace, helping you navigate the waves of challenges with courage and grace.",
    ],
    "TECHNIQUE/ FRAMEWORK": [
      "When everything feels hard, it's time to create more connection with yourself. How can you do this?: Movement and dance can help release tension and anxiety by engaging the body and mind, promoting a sense of freedom and emotional expression.",
      "Stand or Sit Comfortably: Find a position that allows you to move freely, either standing or sitting.",
      "Deep Breaths: Take three deep breaths to center yourself.",
      "Tune into Your Body: Focus on how each part of your body feels. Start from your toes and move upwards, noticing any tension or relaxation.",
      "Move with Intention: Begin to move slowly and gently, as if you are dancing. Let your movements flow naturally, focusing on the sensation of each movement.",
      "Express Emotions Through Movement: Use your movements to express how you’re feeling. For example, swaying for calmness, stretching for tension, or shaking for anxiety.",
      "End with Stillness: After a few minutes, gradually slow your movements until you are still. Take a final deep breath and reflect on how your body feels.",
    ],
  },
  {
    Title: "I need to feel motivated again",
    "TEXT (RECORDED/ SCRIPT)": [
      "Your journey through cancer treatment is akin to navigating a vast ocean, with each wave presenting its own set of challenges. Yet, it is your unwavering spirit that guides you through the tumultuous waters.",
      "Imagine you are a sailor embarking on a long voyage. At the outset, the horizon stretches endlessly before you, filled with promise and possibility. But as you journey onward, you encounter storms, rough seas, and moments of doubt. Yet, it is your determination to reach your destination that keeps you going, one wave at a time.",
      "Human motivation is a complex interplay of various factors, but it can be broadly understood through the lens of the three motivators theory: autonomy, mastery, and purpose. Autonomy refers to our innate desire to have control over our lives and decisions. Mastery is the pursuit of continuous improvement and skill development, while purpose gives meaning and direction to our actions. As you navigate the challenges of cancer treatment, it’s important to hold onto these motivators as guiding lights, empowering you to persevere despite the uncertainties.",
      "One of the greatest challenges you may face is the monotony of treatment, the repetition of the same rituals and routines day after day. Yet, it is precisely in these moments of repetition that our resilience is tested and forged. Cancer treatment is not a sprint; it is a marathon, requiring endurance, patience, and unwavering determination. It is the small victories along the way—the slight improvement in symptoms, the comforting words of a loved one, the moments of laughter amidst the tears—that sustain us and propel us forward.",
      "It’s natural to focus on the negative aspects of your journey, the setbacks and uncertainties that loom large on the horizon. But I urge you to shift your focus, however briefly, to the small victories that punctuate your path. Celebrate each milestone, no matter how seemingly insignificant, as a testament to your strength and resilience.",
    ],
    "TECHNIQUE/ FRAMEWORK": [
      "Creating restful days between cancer treatments is essential for maintaining your physical and emotional well-being. Here are some strategies to help you achieve this:",
      "Prioritize Self-Care: Dedicate time each day to engage in activities that bring you joy and relaxation, whether it’s reading a book, taking a warm bath, or spending time in nature.",
      "Practice Mindfulness: Incorporate mindfulness techniques into your daily routine, such as deep breathing exercises or meditation, to help calm your mind and reduce stress.",
      "Stay Active: Engage in gentle physical activity, such as walking or yoga, to help maintain your strength and energy levels. Even short walks can have a positive impact on your mood and well-being.",
      "Connect with Others: Reach out to friends, family members, or support groups for emotional support and companionship. Sharing your thoughts and feelings with others can help alleviate feelings of isolation and provide a sense of community.",
      "Seek Professional Support: Consider speaking with a counselor or therapist who specializes in working with cancer patients. They can provide additional support and guidance to help you cope with the challenges you’re facing.",
      "Remember, you are not alone in this journey. We are here to support you every step of the way, cheering you on as you navigate the challenges ahead. Together, we will weather the storms and celebrate the small victories that make each day a triumph of the human spirit.",
    ],
  },
  {
    Title: "I am tired of being here",
    "TEXT (RECORDED/ SCRIPT)": [
      "I am deeply moved by your strength and resilience. You are navigating a path that requires immense courage and fortitude, and I want you to know that your determination is truly inspiring.",
      "Imagine a marathon runner who has trained for months, pushing their body to the limits with every step. They start the race full of energy and determination, but as the miles pass, their muscles ache, and their lungs burn. They become increasingly exhausted, yet they press on, fueled by the hope of crossing the finish line. Your journey through cancer treatment is much like that marathon. Every appointment, every treatment, and every decision is another mile in your race. It’s no wonder you feel exhausted; the mental and physical demands are tremendous.",
      "Mental exhaustion, or cognitive fatigue, is a significant aspect of what you’re experiencing. The relentless cycle of medical appointments, treatment regimens, and the emotional weight of a cancer diagnosis can deplete your mental resources. This state of constant mental exertion can lead to decision fatigue, where the ability to make decisions becomes impaired due to the sheer volume and complexity of choices you face daily. This can range from deciding on treatment options to managing daily activities and planning for future care.",
      "The process of accessing care, scheduling and attending appointments, and undergoing treatments is inherently challenging. Each step requires not only physical energy but also significant cognitive and emotional investment. The necessity to weigh the benefits of treatments against their side effects and impact on your quality of life adds another layer of complexity and stress.",
      "Understanding the psychological underpinnings of this exhaustion can provide some insight into why you might feel the way you do. Decision fatigue occurs because every choice we make depletes a finite amount of mental energy. When faced with continuous, high-stakes decisions about your health, it’s natural to feel drained. Additionally, the physical side effects of treatments, such as chemotherapy-induced fatigue, compound this mental exhaustion, creating a cycle that can be difficult to break.",
      "Burnout is another critical concept to consider. Just as professionals can experience burnout from overwork, patients can experience burnout from the continuous demands of treatment and healthcare management. This burnout manifests as physical, emotional, and mental exhaustion, often accompanied by feelings of helplessness and detachment.",
      "Taking a break and allowing yourself to rest is not a sign of weakness; rather, it’s a necessary strategy to maintain your overall well-being.",
      "Remember, every step you take in this journey, no matter how small, is a testament to your courage and determination. Treatments are an essential part of your path to recovery, and while they are challenging, they offer the hope of healing and better days ahead. It’s vital to weigh the benefits of these treatments against their costs and find a balance that supports your overall well-being.",
      "You are not alone in this. We are here to support you every step of the way. If you ever need to talk or require additional resources, please reach out. Together, we can navigate this marathon with the strength and resilience that you exemplify so beautifully.",
    ],
    "TECHNIQUE/ FRAMEWORK": [
      "Here are some ways to create restful days between cancer treatments:",
      "Prioritize Sleep: Ensure you get adequate sleep by establishing a consistent bedtime routine. Quality sleep is crucial for physical and mental recovery.",
      "Engage in Gentle Activities: Light activities such as walking, yoga, or stretching can help keep your body active without causing excessive fatigue. These activities can also reduce stress and improve mood.",
      "Mindfulness and Relaxation: Practices like mindfulness meditation, deep breathing exercises, and progressive muscle relaxation can help calm your mind and reduce mental fatigue.",
      "Nutritional Support: Eating a balanced diet rich in fruits, vegetables, lean proteins, and whole grains can support your energy levels and overall health. Staying hydrated is equally important.",
      "Mental Diversions: Engage in activities that bring you joy and provide mental relaxation, such as reading, listening to music, or spending time with loved ones.",
      "Simplify Decisions: Reduce decision fatigue by simplifying choices where possible. Delegate tasks to family or friends and use routines to minimize daily decision-making.",
      "Support Networks: Lean on your support network, including family, friends, and healthcare professionals. They can provide emotional support and practical assistance, helping to lighten your load.",
    ],
  },
  {
    Title: "When can my life return to normal?",
    "TEXT (RECORDED/ SCRIPT)": [
      "I know things have been really tough for you lately, and it’s okay to feel worried and unsure about the future. Let's talk about some of the things you’ve been feeling and thinking, and hopefully, I can help you understand them a bit better.",
      "When you were diagnosed with cancer, it probably felt like your whole world turned upside down. It’s common to feel like life won’t return to “normal” again. Many people in your situation feel the same way. In fact, research shows that up to 30% of cancer survivors struggle with anxiety and depression because of these big changes.",
      "These feelings can be really powerful and can affect your emotions and behaviors in different ways. When you're feeling sad or scared, you might not want to do things you used to enjoy. You might feel tired or have trouble sleeping. This is your body’s way of reacting to stress, and it's completely natural.",
      'Now, let’s talk about a psychological phenomenon called "cognitive distortions." These are like little tricks our brain plays on us, making us think in negative ways that aren’t always true or helpful. Imagine if you were playing a game and your friend kept telling you that you were going to lose, even though you hadn’t even started playing yet. That wouldn’t feel very good, would it? Cognitive distortions are like that friend, always predicting the worst and making you feel bad.',
      'One common cognitive distortion is called "catastrophizing." This is when you think that the worst possible thing is going to happen. For example, you might think, “My life will never be the same again, and I’ll never be happy.” While it’s okay to feel worried, thinking this way can make you feel even more scared and sad.',
      'Another one is "all-or-nothing thinking." This is when you see things in black and white, without any middle ground. You might think, “If I’m not completely healthy, my life is ruined.” But life is full of shades of gray, and there’s a lot of happiness to be found, even in tough times.',
      "It’s important to recognize these thoughts and remind yourself that they are just that—thoughts. They aren’t always true. You can challenge these thoughts by thinking of times when things have turned out better than you expected, or by talking to someone you trust about how you’re feeling.",
    ],
    "TECHNIQUE/ FRAMEWORK": [
      "Remember the thoughts exist in our mental mind. We are going to do an exercise together. Take a paper. Fold it in half. On one side, title: Things that have changed. Under this title start to write all the things you experience have changed: behaviors, circumstances and everyday life. Now turn the page to the other half which is blank. On the other side, title it as: Things that have not changed. I am sure this will be tough. Primarily, we think every thing has changed. But ask yourself: the people around you, your hobbies, likes, dislikes, your personality, your routines. Think of things that have remained the same. Normal is afterall a set of things we are used to. We live in a transient world where everything changes constantly. We are only extremely bothered when a lot of it changes together. This exercise will show you the things that remain constant even though there is turmoil happening.",
    ],
  },
  {
    Title: "Does my family know I appreciate them?",
    "TEXT (RECORDED/ SCRIPT)": [
      "With family, from childhood things seems to be taken for granted many times. We don't end up thanking our parents or our siblings or our partners on an everyday basis because somewhere we end up thinking that yeah, this is what family does. It is true, families are the closest inner circle to so many of us that nobody can take their place but it is also true that like how every human loves being appreciated, we need to take out sometime regualrly and appreciate our loved ones too.                                                                                                                             Cancer is a roller coaster in itself, it brings out in us every emotion that can toss and turn us in every direction. Some are lucky to have family as their firm anchors in these challening and tough times and with so much going in our lives with treatments and medications that we forget to acknowledge things that are closest to us.                                                                                                                                                                                          This thought specifically reflects a deep-seated concern about whether your feelings and gratitude are adequately conveyed and recognized by your loved ones. This thought often arises from a combination of personal experiences which could entail experiences in family, your attachment with them, and the emotional strain associated with cancer The key emotion behind this thought is anxiety, driven by a fear of emotional disconnection or  the feeling of taking things for ganted . Psychologically, this ties into the concept of attachment and relational security. You may worry that amidst the chaos of treatments and the focus on your health, you haven't expressed your gratitude enough, leading to feelings of guilt or inadequacy. This thought signifies a need for validation and reassurance in your relationships. By acknowledging this, you can take proactive steps to express your gratitude, strengthening the emotional bonds with your family and ensuring they feel appreciated and valued. This can help alleviate some of your anxiety and enhance the support you receive from your loved ones and as they say it's never too late, let's make sure that this thought is checked off from your list where you have done your part to appreciate your family.",
    ],
    "TECHNIQUE/ FRAMEWORK": [
      "The time you spend now is the most precious one where you and your family are together and what better way to show your gratitude than to make a Time Capsule of these memories for your family and here's how you could do it:                                                                                                                        1. Set down the Intention: When would you want your family to open it and what would you want to address- the past/present/future memories or just a thank you note for all their efforts.                                                                                                                               2. Gather your items:  Collect items that have significant meaning to you. This could include photographs, letters, small souvenirs, or any items that would make your family feel happy and feel appreciated.",
      "Writings: Write letters to your family, jot down memories, record your thoughts and feelings, or list your goals and aspirations. These writings can be a powerful way to capture your current state of mind and emotions.                                                                                                                                                            3. Label Everything",
      "Descriptions: Label each item with a description or a date for every member. This adds context and helps you remember the significance of each item when you open the capsule in the future.",
      "Personal Notes: Write notes explaining why each item is important to you.",
      "4.Seal Your Capsule",
      "Container: Place all your items and writings into the container.",
      "Closure: Seal the container securely. You might want to decorate it to make it special and unique to you.",
      "5.Set an Open Date",
      "Timeframe: Decide when your family will open this time capsule. It could be after completing your treatment, on a significant anniversary, or in a few weeks or simply a few years down the line.",
      "Mark the Date: Write the open date on the container and make a note of it in your family calendar.",
      "6.Store Safely",
      "Location: Find a safe and secure place to store your time capsule where it won't be disturbed or damaged.",
      "Reminder: Set a reminder for your family to open it on the designated date.                                                                                                                                      Small activites like these can help everyone take a pause from the chaotic life, bring a smile and sense of warmth and just set in the happy feeling and seeing them happy indeed makes you happy! It's never too late to take a minute from our busy days to stop and say thank you to our loved ones, you dont need occasions or specific events to do so! Remember, if you feel it, you say it!",
    ],
  },
  {
    Title: "Really, what was it like to sleep well?",
    "TEXT (RECORDED/ SCRIPT)": [
      "We know how lack of sleep can have profound impacts, such as accumulating sleep debt, which is the cumulative effect of not getting enough sleep. This sleep debt can impair cognitive function, weaken your immune system, reduce energy levels, and hinder recovery and overall well-being during cancer treatment. Poor sleep can make it difficult to cope with daily challenges and can exacerbate feelings of anxiety and depression. Practices like sleep hygiene—practices and habits that influence your sleep quality can also play a big role in our sleep. Good sleep hygiene would include maintaining a regular sleep schedule, creating a restful environment, and avoiding stimulants before bedtime. Unhealthy sleep habits, such as irregular sleep patterns, excessive napping during the day, and using electronic devices before bed, can contribute to sleep disturbances. Dealing with cancer it is natural to miss sleep and these thoughts often arise when you face persistent sleep disturbances due to the side effects of cancer treatment, pain, or stress. This thought stems from the frustration and nostalgia for the restful sleep that you used to experience. The primary emotion behind it is a mix of longing and distress, which is normal and can lead to behaviors such as staying awake with racing thoughts, feeling irritable, and dreading bedtime. These behaviors can further deteriorate your sleep quality, creating a cycle of insomnia and fatigue that negatively impacts both your mental and physical health.                                                                                                                                                                                                                                                                                                                                                                  It is distressing and you might feel that there is nothing that can cure it but you are wrong, though it would take time for you to reach your desired sleep routine, by keeping in mind the negative impacts of lack of sleep, and following good sleep hygience and  practicing this technique called Guided imagery, a therapeutic technique that uses visualization to create a calming and restful mental state. Here’s how you can use guided imagery to help with sleep:",
    ],
    "TECHNIQUE/ FRAMEWORK": [
      "Choose a Peaceful Image:",
      "Think of a place where you feel completely relaxed and at peace. This could be a beach, a forest, a garden, or any other place that brings you comfort. Picture this place in your mind with as much detail as possible.",
      "Settle Into a Comfortable Position:",
      "Lie down in a comfortable position and close your eyes. Take a few deep breaths to relax your body and mind.",
      "Visualize the Scene:",
      "Imagine yourself in your peaceful place. Visualize the sights, sounds, smells, and sensations. Feel the warmth of the sun, hear the gentle waves, or smell the fresh forest air. Immerse yourself fully in this calming scene.",
      "Engage Your Senses:",
      "As you visualize the scene, engage all your senses. Notice the details of your surroundings. If you’re at the beach, imagine the texture of the sand beneath your feet and the sound of seagulls in the distance. The more vividly you can picture the scene, the more effective the imagery will be.",
      "Maintain Focus:",
      "If your mind starts to wander, gently bring your focus back to your peaceful place. Continue to breathe deeply and stay immersed in the visualization for 10-15 minutes or until you feel ready to sleep.                                                                                                 With cancer, symptoms don't just remian physical they manifest mentally too and sleep being the most crucial thing physically getting affected by treatments seem a little outside our control but taking care of the mental effects is in our control. Using guided imagery can help shift your focus from anxious thoughts to a serene mental space, promoting relaxation and making it easier to fall asleep because you leave all the worries behind and let yourself sink in the process!",
    ],
  },
  {
    Title: "Is this my new normal now?",
    "TEXT (RECORDED/ SCRIPT)": [
      'Imagine you want to your skin to glow and you are told that eating a walnut everyday will make that happen and now you start adding a walnut everyday in your routine and slowly with time eating a walnut becomes habit. The same way i can imagine how being wrapped up in a loop of medicines, treatemnts and hospital visits and everything cancer related can make it seem like this what life has become all about. The new normal. I know none of those words- new, normal when related to cancer has any positive ring to it and yes, it is absoultely okay to feel that. This "new normal" can provoke a range of emotions from helplessness, frustration, anger, sadness, lethargy in general towards life and can provoke thoughts like "life isn\'t fun anymore", "why me?", "when will things get back to normal?"," will things ever be the same again?". I hear you and i know you are scared but all things don\'t have to change. Cancer is just the comma in life and it doesn\'t have to be a fullstop where you have to start over things again. It could just mean that we just got to pause for a bit, take a little break and rewire how we got to do life again with this new obstacle and to help you do that let me take you through Cognitive defusion which helps you step back from distressing thoughts and see them for what they are—just thoughts, not absolute truths. This technique can reduce the emotional weight of your worries and this is how:',
    ],
    "TECHNIQUE/ FRAMEWORK": [
      '1. Notice the Thought: Recognize when you are thinking, "is this my new normal?" Accept that this thought is present in your mind.',
      '2.Label the Thought: Instead of saying, "Things will never be the same again," try rephrasing it to, "I am having the thought that things will never be the same again." This simple change helps you see the thought as an event in your mind rather than a fact.',
      "3.Visualize the Thought: Imagine your thought as an image or words on a screen. See it moving away from you or dissolving. This visualization can help create a sense of distance from the thought like it floating away on a cloud.",
      "4. Use a Silly Voice: Repeat the thought in a silly or exaggerated voice. This can reduce its power and make it feel less threatening.",
      "5.Thank Your Mind: Acknowledge your mind's attempt to protect you by generating these thoughts. You might say, \"Thank you, mind, for trying to keep me safe, but I don't need this thought right now.\"                                                                                                          At times we get so engrossed in our thoughts that we start internalising them and reinforcing them. Cancer yes, does change a lot of things but that doesn't mean your life needs to change, they just require few allterations, you can still go out with family and friends, still watch your favourite show and movie, still do the things that you want but now just with a little precaution and safety. It could be the new normal but does not have to mean that it has to be the new you!",
    ],
  },
  {
    Title: "None of my colleagues even came to meet",
    "TEXT (RECORDED/ SCRIPT)": [
      "We can go ahead and analyse reasons as to why none of your colleagues came to meet you, maybe they were too sad to do so?, maybe they dint know they could do?, maybe they thought that they shouldn't disturb you and let you rest?, maybe they thought that you wouldn't want them to come see you in that condition?, maybe you weren't so close to them afterall?, we can go on. We could finish an entire page of all the MAYBEs we can think of and ASSUME and yet we wouldn't be sure of  why they weren't there. The truth is that we come up with these MAYBEs to not feel the disaapointment, hurt, sadness that these thoughts can end up making us feel. They are ways we try to rationalise with ourselves to fool our minds but we don't have to fool ourselves, we can be honest with nobody but ourselves. Yes, you do feel bad that none of them came. Yes, you are disappointed that they din't show up and these are valid and true to feel.                                                                                                                                      We often end up in this loop because we don't know how to break away from this cycle of feeling disappointed, and finding reasons and those reasons  making us feel bitter and then we start distancing ourselves and withdrawing and all this can end up making us feel distressed and negatively when in reality we don't hold the evidence and validity of these thoughts. Let me help you understand this better by explaining to you the TAF:",
    ],
    "TECHNIQUE/ FRAMEWORK": [
      "Your Thoughts- Feelings- Actions (TAF) are interconnected with each other. They are very closely intertwined. How we think influences how we feel and our subsequent actions.",
      '●For example-                                                                                                                      Thought :"None of my colleagues came to meet me, maybe (for example) I am not that important to them"                                                                                                                                                                             Feeling   : Sad, Disaapointed, Hurt, Lonely, Resentful, etc                                        Action     : You start to feel bad about yourself, stressing yourself out, withdrawing and distancing  yourself and all this affecting your state of mind and indeed yout treatment.',
      "But if we replace this negative thought with a positive thought which is also called reframing and challenging your negative thoughts-",
      '● Thought : "None of my my colleagues came to meet me and Im not sure why and I do feel bad about it and I can ask them why they haven\'t visited me yet."',
      "Feeling   : Sad, Confused, Accepted, Indifferent, Inquisitive, etc                                                       Action     :  Because you are unsure and you accept that yes you are sad but rather than making assumptions, you feel  indifferent, wanting to know what could the reason be and this can make you feel curious rather than stressed in turn keeping you calm and relaxed where it wouldn't interfere with your tratement.",
      "Just how you talk to yourself can make so much of a difference in not only your mindset but also your actions! So the next time you find yourself going through a negative thought spiral I want you to take a deep breath, accept it because it is normal to go through these and remember to replace them with one positive thought and see how it all makes a difference because Clarification is always better than Assumption and we don't need anything to add on to your stress with cancer already giving a fair share of it!",
    ],
  },
  {
    Title: "Maybe I should get some work done while I still can",
    "TEXT (RECORDED/ SCRIPT)": [
      "Feels like you have a clock ticking right next to you all the time right? You don't know when your body might not be able to take things anymore and that is scary to think of. This thought likely originates from a sense of urgency and the awareness of the uncertainty that comes with a cancer diagnosis. It reflects your desire to make the most of your current time and energy, given the unpredictable nature of your health situation. It’s natural to feel like you need to accomplish as much as possible now, especially when faced with the possibility that your ability to work might change.",
      "At its core, this thought is about control and productivity. It suggests that you want to maintain a sense of normalcy and purpose by continuing to work. It might also be a way to assert control over your life during a time when many things feel out of your control. Work can provide a sense of achievement and a distraction from worrying about your health.",
      "This thought can create a mix of emotions. On one hand, it can motivate you and give you a sense of purpose. On the other hand, it can lead to stress and pressure, making you feel like you must constantly be productive. It might also bring up feelings of anxiety about the future or guilt if you feel you aren’t doing enough.  You are doing more than you can everyday by fighting cancer and with this thought it does show your resilience and strength and this calls for you to show yourself some compassion and kindness. Here's how i want you to try it out",
    ],
    "TECHNIQUE/ FRAMEWORK": [
      "Acknowledge the Thought and Feelings: When this thought arises, take a moment to notice it without judgment. Acknowledge the feelings of urgency, anxiety, or pressure that come with it.",
      "Reframe the Thought: Remind yourself that it’s okay to prioritize your well-being over productivity. You might say to yourself, “It’s understandable that I want to get things done, but my health and rest are just as important right now.”",
      "Self-Compassion Practice: Place a hand over your heart or another comforting gesture and say something kind to yourself, like you would to a friend. For example, “I am doing the best I can in a difficult situation. It’s okay to take it one day at a time.”",
      "Set Realistic Goals: Break down tasks into smaller, manageable steps and set realistic goals that consider your current energy levels and health. Celebrate small achievements without putting undue pressure on yourself.                                       For example: If you feel like you need to go the bank to manage your accounts. From getting ready till reaching the bank, break the process into small, managable and realistic goals- because this activity will require a lot of movement, try and insert small breaks in between,: Get ready and take abreak, if its a long travel- equip yourself with medicine, food and water, call someone at the bank and inform them of your arrival to make sure you dont have to wait for long, avoid taking stress and burden and take yout time to figure and sort things out, and once back reward yourself for doing an important task and retire for the day allowing your body and mind to regain the energy lost.",
      "By practicing Mindful Self-Compassion, you can create a balanced approach that honors both your desire to stay productive and your need for self-care. Remember, taking care of yourself is a crucial part of managing your health and well-being during this time so be kind, considerate and mindful of how you treat your body before feeding into the urgency of getting things done!",
    ],
  },
  {
    Title: "What happens to my career now?",
    "TEXT (RECORDED/ SCRIPT)": [
      "Imagine driving on a road with greenery surrounding you and with windows down you feel the fresh air hitting your face and you just follow the road where it takes you until when  suddenly you hit in the breaks because there is a big tree fallen in front of you and now you don't know how to move ahead. Surely, if it was a small tree you could have lifted it by yourself and continued on your journey but this is a big one and you don't know how you are going to do it alone.                                                                                                                                                         Yes, the big tree here is cancer, disrupting your life by being a big block which came out of nowhere and now you are left stranded feeling what happens next? It is scary, I can understand that to think that now things won't conitue as they would, your career an important part of your identity, providing not only financial stability but also a sense of purpose, routine, and achievement feels hazy. This thought reflects your concerns about the future and how your illness might disrupt your professional life. It encapsulates fears about potential changes in your ability to work, the possibility of needing to take extended leave, or even concerns about job security and financial implications. It’s a natural response to the upheaval that cancer brings to your daily life and long-term plans.",
      "This thought can evoke a range of emotions, including anxiety, fear, sadness, and uncertainty. You might feel overwhelmed by the potential changes and the unknowns that lie ahead. It can also make you feel vulnerable and stressed about balancing your health needs with your career responsibilities. There may be a sense of loss or grief over the possible impact on your professional goals and achievements but are we certain that it all has to just stop?                                                                                                                                                                                                    Just how maybe you found a way to remove that tree from your path by looking around for help, being patient, waiting and helping people help you before you conitnue to drive away; your career doesn't have to stop and end because of cancer. Maybe now you would just have to find a way to accomodate yourself with this new condition and set out slowly rather than not moving ahead at all. Let me help explain this better by telling you about Cognitive Restructuring:",
    ],
    "TECHNIQUE/ FRAMEWORK": [
      "Cognitive Restructuring is like finding ways to remove that tree block rather than giving up on the fact that maybe you can't remove it at all. It is a startegy to help you reconstruct your thought process to help you manage your anxiety and develop a more constructive outlook on your career’s future and here's how you could do it:                                                                                                                                                 1. Identify and Challenge Unhelpful Thoughts: When this thought arises, write it down. Identify any underlying assumptions or catastrophic thinking. For example, you might be assuming the worst-case scenario without evidence like \"I wont ever be able to work again, my hopes, promotion, achievements, everything seems to be worthless now\"",
      "2. Examine the Evidence: Before letting ourselves flow away in the spiral of thoughts than trigger we need to consider the facts like: Are there policies in place at your workplace for medical leave? Have colleagues or friends faced similar challenges and found ways to manage their careers? Gathering information can help ground your thinking in reality.",
      "3.Reframe the Thought: Develop a more balanced perspective. You might reframe the thought as, “I’m facing uncertainty, but I can explore my options and seek support to manage my career during this time.”",
      "4. Focus on What You Can Control: Identify aspects of your career and health that you can influence. This might include discussing flexible work arrangements with your employer, delegating tasks, or seeking career counseling. Taking proactive steps can help you feel more in control.",
      "5. Seek Support: Talk to your HR department, a career counselor, or a support group for cancer patients. Sharing your concerns and getting professional advice can provide practical solutions and emotional reassurance.                                      Nobody can you stop you from working other than your own body. Cancer is a draining illness and as much as we'd like to have our normal lives back, we need to be minful about how much we can adapt with the illness in hand because we don't want to exert ourselves and tire ourselves out, affecting our health even more. Remember, it’s important to be kind to yourself during this challenging time and recognize that seeking help and making adjustments is a strength, not a setback.",
    ],
  },
  {
    Title: "I don't trust these nurses, what if they mess up?",
    "TEXT (RECORDED/ SCRIPT)": [
      "You know that feeling, when in school or college there is a group project and you know you best work with only yourself and  believe that only you can make it look neat but because it is a group porject you let someone else do it and constantly keep thinking that, no, i do not trust this person to do it as neatly as i would? It is quite natural to think that because we don't trust evryone easily unless we have seen how they work before and because your marks are in line it feels like more of a gamble that you are taking.                                                                              With cancer at hand, you'd want everything to be safe, professional, with experts treating you at every step and one small glitch can make you question it all because you are likely coming  from a place of  fear and vulnerability that come with being in a medical setting, especially when dealing with a serious illness like cancer. When you're entrusting others with your care, it’s natural to feel anxious about their competence and the potential for mistakes. This is particularly true if you've had negative experiences in the past or heard about them from others.",
      "This thought reflects a lack of trust and heightened anxiety about your safety and well-being. It indicates that you are feeling vulnerable and uncertain about the reliability of those who are taking care of you. This distrust can be a way of expressing your fear about losing control over your situation and the potential consequences of errors in your treatment.",
      "This thought can make you feel anxious, scared, and stressed. It can lead to heightened vigilance and constant worry, making it difficult to relax and feel comfortable during your treatment. Distrust can also cause tension in your interactions with the medical staff, potentially affecting the quality of care you perceive. You are absolutley not wrong to feel this way but we need to see the difference and draw a line between being careful and being fearful and to help you see that line let me take you through this technique called Exposure Therapy:",
    ],
    "TECHNIQUE/ FRAMEWORK": [
      "In this technique, we will help you gradually build trust in the process and equip you to deal with the unwanted negative thoughts:                                                              1. Gradual Exposure to Trust-Building Interactions: Start by observing the nurses from a distance, noting their professional behavior and interactions with other patients. This can help you see their competence in a less direct manner.",
      "Gradually increase your direct interactions with the nurses. Begin with small, manageable conversations or requests for information about your care.",
      "2.Positive Reinforcement: Focus on and acknowledge positive interactions and competent care. For example, if a nurse explains a procedure thoroughly or shows kindness, make a mental note of it. You can even keep a journal to document these positive experiences, helping to reinforce the reality that many interactions are positive and competent.",
      "3.Practice Assertive Communication: Use assertive communication to express your needs and concerns clearly and calmly. This can help you feel more in control and ensure that your needs are being met.For example, you might say, “I’m feeling very anxious about my care. Can you walk me through what you’re doing and why?”",
      "4.Mindfulness and Relaxation Techniques:Engage in mindfulness practices to stay grounded in the present moment. This can help reduce anxiety and prevent your mind from catastrophizing. Techniques such as deep breathing, progressive muscle relaxation, or guided imagery can help manage stress and create a sense of calm.          It is normal to go through these feelings when you are concerned about something much more bigger like cancer. It is your life that is in question and you have the right to make the correct and thorough decisions about it but remind yourself about when you are being careful and when you are being fearful because the latter can make us go to places where we don't want to be at!",
    ],
  },
  {
    Title: "Will the insurance cover all this?",
    "TEXT (RECORDED/ SCRIPT)": [
      "We generally see ads talking about health insurance and we might have a good policy too but it would have been a surprise to think that we might have to use it one day to help us fight the battle of cancer. To question whether your insurance can cover this likely stems from the uncertainty and complexity surrounding medical expenses and insurance coverage. When faced with a serious illness like cancer, financial concerns often come to the forefront. The potential costs of treatment, medications, and hospital stays can be overwhelming, and understanding what insurance will cover can be confusing. This thought reflects your anxiety about the financial burden of your treatment. It highlights a fear of potential financial strain and the uncertainty about whether your insurance will adequately cover your medical expenses. This concern is very common among patients dealing with significant medical issues and can evoke feelings of anxiety, stress, and fear. You might feel overwhelmed by the potential costs and uncertain about how you will manage them. This worry can add to the emotional burden you’re already carrying due to your illness, making it harder to focus on your health and well-being. It must feel like you are lost without any guidance to have to be able to figure out all this on your own. You are wrong! For starters, let me guide through how we can better cope with this thought by following these simple steps:",
    ],
    "TECHNIQUE/ FRAMEWORK": [
      "1. Identify the Problem: Clearly define the specific problem you’re worried about. In this case, it’s the uncertainty about insurance coverage for your treatment.",
      "2. Gather Information: Collect as much information as possible about your insurance plan. Contact your insurance provider to get detailed information about what is covered, what isn't, and any out-of-pocket costs you might incur. You can also ask your healthcare provider for assistance in understanding what treatments and services you’ll need and their costs.",
      "3.Generate Possible Solutions: List potential actions you can take to address this concern. This might include speaking with a financial counselor at the hospital, exploring additional insurance options, or looking into financial assistance programs for cancer patients.",
      "4.Evaluate and Choose Solutions: Assess the pros and cons of each potential solution. Consider which options are most feasible and effective for your situation. For example, scheduling a meeting with a hospital financial counselor or with your insurance provider might be a practical first step.",
      "5.Take Action: Implement the chosen solution. Make the necessary phone calls, gather documents, and follow through with the steps you’ve identified.",
      "6.Review and Adjust: After taking action, review the outcomes. If the problem isn’t fully resolved, reassess the situation and consider other solutions you listed earlier.",
      "Remember, seeking help and asking questions about your insurance and financial options is important. You’re not alone in this, and there are resources available to help you navigate these challenges. When faced with these practicalities, we need a more practical, structured and rational approach to help deal with these because these are definitely in your control. It is natural  to be scared but remind yourself that you don't have to feel alone even when you are scared!",
    ],
  },
  {
    Title: "Will these medications work?",
    "TEXT (RECORDED/ SCRIPT)": [
      "Having these thoughts are absolutely normal and it is likely that these thoughts arises from the natural uncertainty and hope that accompany any medical treatment for a serious condition like cancer. It's common to question the effectiveness of the prescribed medications, given the stakes involved. This concern might also stem from previous experiences with treatments that didn’t work as expected, or from hearing about varying treatment outcomes from others. This thought reflects your deep desire for the treatment to be effective, and a concern about the potential outcomes. It highlights your hope for a positive response to the medication, as well as the fear of potential ineffectiveness or adverse side effects. This  is a normal part of coping with a serious illness and wanting the best possible outcome because in a way we are preparing ourselves for the worst-case scenario. This tendency is aka catatrophising where this tendency to assume the worst outcomes often stems from the brain's natural inclination to focus on potential threats as a means of survival. When faced with uncertainty, especially in high-stakes situations like dealing with cancer, the mind may exaggerate the possible negative outcomes as a way to prepare and protect oneself from disappointment or harm.  You may undergo a range of emotions, including anxiety, fear, and uncertainty. You might feel stressed about the possibility of the treatment not working, which can add to the emotional burden of dealing with your illness.  It might also cause you to feel impatient or frustrated if results aren’t immediate or as expected. It will be okay and you can learn to manage the anxiety and uncertainty about your medications while staying focused on what you can control and what is meaningful to you.",
    ],
    "TECHNIQUE/ FRAMEWORK": [
      "While it is natural I need you to follow these steps to help you cope with this thought with a more postive outlook:                                                                                                                                                                         Acknowledge Your Thoughts and Feelings: Recognize that it’s normal to have these concerns. Acknowledge your anxiety and fear without trying to push them away. You might say to yourself, “I’m feeling anxious about whether these medications will work, and that’s okay.”",
      "Identify the Thought: Recognize when you're thinking, \"What if my medications don't work?\" It's natural to have concerns, but dwelling on this thought can increase anxiety.",
      "Examine the Evidence: Take a step back and look at the facts. Consider times when treatments have been effective for you or others in similar situations.                                                                                     Past experiences: Have similar medications worked in the past, either for you or for others?",
      "Medical advice: What do your healthcare providers say about the medication's potential effectiveness?",
      "Research: Are there studies or evidence supporting the medication's efficacy in treating your condition?",
      "Challenge Assumptions: Analyze any assumptions or biases underlying the thought. Ask yourself:",
      "Am I catastrophizing or assuming the worst-case scenario without considering other possibilities?",
      "Is there a pattern of negative thinking or self-doubt influencing my perception of the situation?",
      "Have I discounted any positive outcomes or alternative solutions?",
      "Reframe the Thought: Once you've examined the evidence and challenged assumptions, reframe the thought with a more balanced perspective:",
      "Instead of fixating on the possibility of medication failure, remind yourself that treatment outcomes can vary and that adjustments can be made if needed.",
      "Focus on the proactive steps you're taking to manage your health, such as adhering to the prescribed treatment plan and communicating openly with your healthcare team.",
      "Practice Coping Strategies: Develop coping strategies to manage anxiety. Mindfulness techniques, like deep breathing or visualization, can help calm your mind. Also, lean on your support network for encouragement and reassurance.                                                                                                                          Remember, it’s okay to have these thoughts, and there are ways to cope with them constructively! You got this!",
    ],
  },
  {
    Title: "Noone understands me",
    "TEXT (RECORDED/ SCRIPT)": [
      "The anger, frustration, annoyance, irritation, tiredness, there are so many things that you might be going through and nobody around you would understand that but yourself because you are the one having to bear with it all. Haven't we at some or the other point of time in our lives felt or said this out loud? It could be back in our teenage days when parents din't allow us to go for a sleepover or back when we were all trying to find a work-life balance. But now, this line doesn't feel the same. It makes us experience feelings of sadness, loneliness, frustration, anger and even resentment because shadowing it is cancer, an illness which brings out in us a fountain of emotions. The thought that is concerning you might be coming  from the profound isolation that can accompanies a cancer. Facing such a significant health challenge can make you feel like others, even those close to you, cannot fully grasp what you're experiencing both physically and emotionally. This feeling of being misunderstood and feeling invalidated is common when dealing with the unique struggles and fears associated with a cancer diagnosis because it is natural that a sense of loneliness and a need for deeper connection and empathy is felt here. It signifies that you feel isolated in your experience and that the support and understanding you are receiving are not meeting your emotional needs. It might also indicate a frustration with the gap between your inner experience and how others perceive or react to your situation. All this leaves us with feeling restless, lost, helpless but hey, before we go down deeper in this spiral I want to remind you that these feelings and this thought is temporary, think of it like a glitch in time and let's help you understand this better.",
    ],
    "TECHNIQUE/ FRAMEWORK": [
      "Because this thought can lead to a sense of emotional isolation, making it harder to cope with your illness. These feelings can compound the stress and emotional burden you are already carrying, potentially affecting your overall well-being which is why you need to try :                                                                                                                                                                             1.Acknowledge Your Feelings: Recognize and validate your feelings of isolation and misunderstanding. It's okay to feel this way, and acknowledging these emotions is the first step towards addressing them.",
      "2.Need Recognition: Take some time to write about your thoughts and feelings to understand what needs of yours are not being met. The need to be understood, loved, validated, heard etc. and what made you feel like they are they not met and how could these needs be met.",
      "3.Communicate Your Needs: Share your feelings with trusted friends, family members, or support groups. You might say, “I’ve been feeling really isolated because it seems like no one truly understands what I’m going through. I need to talk about my experiences and have someone listen without trying to fix things.” This can help others understand how to support you better.",
      "4. Revaluate- Once you have understood, communicated, circle back to how you have been feeling and revaluate if your needs are being met or not. During times like these when you are battling cancer, you need a strong support system backing you up and it is absolutely okay for you to try and communicate your needs from time and again.",
      "5. Seek Professional Support: Consider talking to a therapist or counselor who specializes in working with cancer patients. They can provide a safe space to explore your feelings and offer strategies to help you communicate your needs better.",
    ],
  },
  {
    Title: "Even I can hardly recognise myself",
    "TEXT (RECORDED/ SCRIPT)": [
      'There are so many changes that you are going through, internally, externally, socially, emotionally, mentally and all this can be over whelming. Changes that stick with us are the ones that we notice physically. Cancer requires intense treatments like chemotherapy and radiation therapy which are not only painful but also have a lot of side effects like loss of hair, loss of weight, swellings etc which can make it hard for you to recognise yourself. This can in turn trigger feelings and thoughts like sadness, anger, disgust, where you question thoughts like "why did this have to happen to me", "if i can\'t recgonise myself what will others think of me", "i look ugly", "i miss my old self". This is tough and scary and these thoughts are coming from a place of having difficulty to accept change and you losing control and this is normal. We weren\'t prepared to deal with these overwhelming changes that we din\'t even know were coming our way but i need you to now prepare yourself to embrace these changes by understanding what are things that we can control and what are things we cannot which subsequently brings more clarity in our thoughts and a feeling of calmness and rationality and here\'s how you could fo it:',
    ],
    "TECHNIQUE/ FRAMEWORK": [
      "This simple strategy can help you focus on what you can control and let go of what you cannot:",
      "Draw Two Circles: On a piece of paper, draw a small circle- (control circle) inside a larger circle-(no control circle)                                                                                                                                                                                                                1. Identify Your Concerns: List your current worries or concerns.",
      "2. Categorize: Place each concern in the appropriate circle.",
      "a. Inner Circle (Control): Write down everything you can control within the inner circle like Managing your diet, taking prescribed medication, attending therapy sessions.",
      "b. Outer Circle (No Control): Write down everything you cannot control in the outer circle like The type of cancer, how your body responds to treatment, others' opinions.",
      "3. Action Plan: For items in the inner circle, create an action plan. What steps can you take to address these concerns? which could be following your routine, seeking help, support, from doctors and caregivers, having a schedule which mentions your treatment dates, medicine timings and reminders along with other items mentioned in your control circle.",
      '4.Acceptance: For items in the outer circle, practice acceptance. Acknowledge these are beyond your control and try to release the associated stress by talking to someone you trust about how you’re feeling. Sometimes just sharing can lighten the load; It is unfortunate that the side effects of the treatment are not in our control and because of that we can\'t control how it brings out the changes in our body and for that you cannot blame yourself.                                                          5. Instead reframe every negative thought with a positive one. For example: "Losing hair is making me look ugly"- "Seeing myself with no hair is weird bit i think im pulling this look off" or "Even i can hardly recgonise myself" - "This is irritating that im going through so many changes but im also waiting to get better and be back to looking like how i used to".                                                                        It does indeed require a lot of effort, positivity, patience and acceptance towards cancer and im proud of you for being vulnerable to accept these changes. It make take time but we know for sure that there is tougher and stronger you in the maing right now, so don\'t give up on that!',
    ],
  },
  {
    Title: "I am so tired to even think",
    "TEXT (RECORDED/ SCRIPT)": [
      "There is that feeling of tiredness that feels good when you come back from a hectic day at work and just lie down on your bed cozily and have the most sound sleep you have had vs this feeling of tiredness where every part of your body feels tired out of pain and exhaustion that it becomes a lot to even bear and this comes from cancer and its treatment. Fatigue is a common and often overwhelming side effect, making it difficult to engage in even basic mental activities.Accomapmying these thoughts are additional worries and overthinking often leading to further exhaustion of physical and mental resources leading us to burnout. Overthinking can lead to a constant loop of repetitive thoughts, draining mental energy and contributing to a sense of overwhelm. Persistent worry about cancer, treatment outcomes, and the future can further intensify mental strain, making even simple tasks feel daunting. As these patterns continue, burnout can set in, leaving individuals feeling depleted physically, emotionally, and mentally. The cumulative effect of these factors can lead to a profound sense of tiredness that makes even the act of thinking feel exhausting and burdensome. These thoughts reflects your deep exhaustion and the impact that cancer has on your overall energy levels and cognitive function. It's an indication that your body and mind are both experiencing significant strain, and it's a signal that you need to address this intense fatigue.",
      "This thought can make you feel frustrated, helpless, and overwhelmed. It may add to your sense of being worn out and can make you feel disconnected from your usual self. The inability to think clearly or engage in daily activities can also contribute to feelings of sadness or irritability, further impacting your emotional well-being and before this further imapcts the treatment process let us apply a few techniques which can help us conserve our energry which by default is running on reserve and help us rest well.",
    ],
    "TECHNIQUE/ FRAMEWORK": [
      "1.Prioritize and Delegate: Identify the most essential tasks that need your attention and delegate or postpone non-essential activities.                                                                                                                                                                                                            2.Assess Your Energy Levels: Take a moment to acknowledge how you're feeling physically and mentally. Recognize that you're experiencing fatigue and that it's okay to feel this way.",
      "3.Identify Essential Tasks: Make a list of the most important tasks that need your attention. This might include medical appointments, taking medications, or attending to urgent matters related to your health and well-being.",
      "4.Evaluate Non-Essential Activities: Consider which tasks can be delegated or postponed without negatively impacting your health or immediate needs. These may include household chores, errands, or work-related responsibilities.",
      "5.Delegate Responsibilities: Reach out to family members, friends, or caregivers and ask for their assistance with tasks that you've identified as non-essential. Clearly communicate what needs to be done and any specific instructions or preferences you have.",
      "6.Scheduled Rest Periods: Incorporate regular rest periods into your day. Short, scheduled breaks can help you manage your energy levels more effectively. Use these times for relaxation techniques such as deep breathing, meditation, or simply lying down in a quiet space.",
      "Remember, you are not alone on this journey and you don't have to do things alone. Prioritise you health and everything else will follow!",
    ],
  },
  {
    Title: "Need just a cigarette",
    "TEXT (RECORDED/ SCRIPT)": [
      "We would do anything which gives us even the remotest feeling of a break or a let out or just a pause from the chaos that we are surrounded by and maybe back in the day  all you needed was just a cigarette to help you find that relief but things have changed now. With cancer present in our life, smoking does not stand a chance because cancer is already the biggest risk we are fighting right now. As normal it seems, to help you cope with this feeling let's first understand where it is steming from.                                                                                                                             This thought likely comes from your body's response to stress and the habit of smoking as a coping mechanism. When faced with overwhelming emotions or anxiety, it's natural to crave something familiar and comforting. Smoking might have been a way for you to manage stress or take a break from the intensity of your feelings.",
      "This thought signifies your need for relief and a sense of control amidst the chaos of your cancer diagnosis and treatment. It’s a way your mind is trying to cope with the stress and uncertainty you're experiencing. However, while smoking might offer temporary comfort, it is not a healthy or effective long-term strategy, especially considering its impact on your health and treatment.",
      "Feeling this urge can make you feel frustrated, anxious, or even guilty, knowing the potential harm smoking can cause, particularly now. It's important to acknowledge these feelings without judgment and understand that craving a cigarette is a natural response to stress and to help you cope with stress let's help you with the following called as Urge Surfing and the 5 D's.",
    ],
    "TECHNIQUE/ FRAMEWORK": [
      "Recognize the Urge: The first step is to acknowledge the craving for a cigarette without trying to fight or suppress it. Understand that cravings are temporary and will pass. This technique is about riding out the urge rather than giving into it.",
      "Observe the Sensation: Pay attention to the physical and emotional sensations that accompany the craving. Where do you feel the craving in your body? Is it a tightness in your chest, a restlessness in your hands, or a feeling of agitation? By observing these sensations, you create a space between yourself and the craving.",
      "Surf the Wave: Imagine the craving as a wave that rises, peaks, and eventually subsides. As you feel the urge to smoke, visualize yourself surfing the wave of the craving, staying balanced and focused, knowing that it will soon pass. The key is to ride out the urge without acting on it.",
      "Stay Present: Focus on your breath to stay grounded. Take slow, deep breaths, counting to four as you inhale, holding for four, and then exhaling for four. This helps to calm your mind and body, making it easier to endure the craving.",
      "Distraction and Engagement: Engage in an activity that requires your full attention to distract yourself from the craving. This could be a hobby, a puzzle, reading, or calling a friend. The goal is to shift your focus away from the urge until it diminishes.",
      "Positive Reinforcement: After the craving passes, acknowledge your success. Remind yourself that you managed to ride out the urge without giving in. Celebrate this small victory as a step towards better health and well-being.                                                                                    Once we feel mentally relaxed and feel a bit more in control of our urge, let's find a way to implement these changes physically and for that you could try the 5 D's stretegy:                                                                                                                                                                                   Delay: When the urge for a cigarette arises, tell yourself to wait for a set period, such as 10 minutes. During this delay, engage in a distracting activity to take your mind off the craving.",
      "Deep Breathing: Practice deep breathing exercises to help calm your mind and reduce the intensity of the craving. Inhale slowly through your nose, hold for a few seconds, and exhale slowly through your mouth.",
      "Drink Water: Keep a bottle of water nearby and take sips whenever you feel the urge to smoke. Not only does this help keep you hydrated, but it also provides a distraction and oral satisfaction.",
      "Do Something Else: Redirect your focus by engaging in a different activity that you enjoy or find relaxing. This could be anything from listening to music, going for a walk, or practicing a hobby.",
      "Discuss Your Feelings: Reach out to a trusted friend, family member, or support group to share your feelings and cravings. Talking about your struggles can help alleviate the urge and provide emotional support.",
      "By utilizing the Five D's strategy, you can effectively manage cravings for cigarettes and develop healthier coping mechanisms to support the overall well-being during treatment.",
      "It is definitely tough and Im proud of you for acknowleding showing the willing to fight this urge. You got it, I believe in you!",
    ],
  },
  {
    Title: "I am losing my mind",
    "TEXT (RECORDED/ SCRIPT)": [
      "Treatments are exhausting, Can't take any more medicines, Where is sleep, Perpetually tired, Cancer is being expensive on the pockets, on mental, emotional, familial and social life... Pheww, yes let it out, let that breath out. It is natural to think that with so much going on inside our brains, we are bound to feel like we are losing it all.                                                                                                                                                                                                                  This thought is naturally stemming from the feeling of being overstimulated and overwhelmed with the nature of illness in front of us and that being of Cancer. Being overstimulated, whether it's from too much noise, too many tasks, or even too much information, can amplify those challenges. Physically, it can add to feelings of fatigue and discomfort, making it harder for your body to heal and cope with treatments. Mentally, it can make you feel overwhelmed, anxious, and unable to focus, which can affect your ability to make decisions and communicate effectively. In your relationships, it might lead to misunderstandings or feelings of being disconnected from loved ones. And when it comes to managing your daily life, being overstimulated can make tasks feel more difficult than they need to be, adding unnecessary stress. With being overloaded with intense feelings and thoughts it naturally bceomes difficult to pay attention to anything happening around us be it focusing on the treatment, on just our health, on family or any other domain which additionally makes us feel trapped and suffocated which in turn affects our treatment process by disrupting it and slowing it.                                                                                                                                                                                                                                                    It is natural to feel this thought. You know when you are in a hurry and you are running late, you rush into doing things quickly, you are messy, disorganised, tensed, and you are looking for your keys everywhere in the house, delaying more and getting more irritated and angry only to relaise that they have been right there in front of you this entire time. To save you from feeling this chaotic and helping you find your keys to peace when fighting cancer, i need you to follow these steps with me:",
    ],
    "TECHNIQUE/ FRAMEWORK": [
      "Journaling can be a powerful tool for organizing your thoughts and emotions, especially during a challenging time like cancer treatment. Structured prompts can provide a focused way to reflect on your experiences and manage your mental and emotional health.",
      "Guided Journaling",
      "Set a Regular Time: Choose a specific time each day to sit down and write in your journal. This could be in the morning to start your day with a clear mind or in the evening to reflect on the day’s events.",
      "Use Structured Prompts: Begin each journal entry with specific prompts that guide your reflections and help organize your thoughts and feelings. Here are some examples of prompts you can use:",
      "Today, I feel... (Describe your current emotions and any physical sensations you’re experiencing.)",
      "The main thoughts on my mind are... (List the primary thoughts that are occupying your mind.)",
      "What is worrying me right now is... (Identify specific concerns or anxieties you have.)",
      "To address these worries, I can... (Think about possible actions or coping strategies.)",
      "What went well today was... (Reflect on positive events or achievements, no matter how small.)",
      "I am grateful for... (List things you are thankful for to foster a sense of gratitude.)",
      "One thing I can do for myself tomorrow is... (Plan a self-care activity or something that brings you joy.)",
      "Free Writing: After addressing the prompts, spend a few minutes free writing about anything else that comes to mind. This can help you uncover additional thoughts or feelings that need attention.",
      "Review and Reflect: Periodically review your journal entries to identify patterns in your thoughts and emotions. Reflecting on past entries can help you gain insights into your mental and emotional states and track your progress over time.",
      "Set Goals: Based on your reflections, set small, achievable goals for managing your thoughts and feelings. For example, you might decide to practice a relaxation technique daily or reach out to a friend for support.                                                      It takes time but once we get a hang of it things start to feel more in our control. Jounalling with guided prompts can be a good practice for you start organising your thoughts and feelings and once comfortbale doing it on paper, it slowly starts internalsing and you process thinsg with more clarity and calmness than before.",
    ],
  },
  {
    Title: "I can't focus at all",
    "TEXT (RECORDED/ SCRIPT)": [
      "Think of your mind like a computer with too many programs running at once. Just like how a computer can slow down or even freeze when it's overwhelmed, your mind can feel cluttered and unable to focus when there’s too much happening emotionally and mentally.                                                                                                                                                                                                                                                       Imagine your mind is like a cluttered desk strewn with papers, pens, and random objects. When everything is disorganized and chaotic, it's hard to find what you need and stay focused on the task at hand. Similarly, when you say, \"I can't focus at all,\" it's like feeling overwhelmed by the clutter in your mind. This feeling often stems from the foggy haze known as brain fog—a common side effect of cancer treatment. It clouds your thoughts and makes it difficult to concentrate, much like trying to see through a dense fog. Additionally, physical fatigue and disrupted sleep patterns further compound this difficulty. When your body is exhausted and your sleep is unsettled, it's like trying to work with a drained battery—your energy levels are depleted, and it's harder to stay alert and focused.",
      "This thought usually means you’re experiencing mental fatigue and perhaps a sense of helplessness. It’s a natural response to the stress and anxiety of dealing with cancer, treatment schedules, and the emotional roller coaster that comes with them. You might feel frustrated, exhausted, or even more anxious because you can't get things done as you usually would.                                                                         To help bring back your focus let us try a fun technique with a fun name called the Pomodoro technique which helps break down your tasks into manageable chunks and gives your brain a chance to rest and recharge, making it easier to stay focused and this is how you do it",
    ],
    "TECHNIQUE/ FRAMEWORK": [
      "1. Choose a Task: Pick one specific task to focus on. It can be something small and manageable, like reading a few pages of a book, writing a short email, or even just sitting quietly and breathing.",
      '2.Set a Timer: Set a timer for 25 minutes. This period is called a "Pomodoro." During this time, focus solely on your chosen task. Put aside all distractions—turn off notifications, close unnecessary tabs, and let others know you need a few minutes of uninterrupted time.',
      "3.Work on the Task: Concentrate on your task for the full 25 minutes. If your mind starts to wander, gently bring your focus back to what you’re doing.",
      "4. Take a Break: When the timer goes off, take a 5-minute break. Stand up, stretch, get a glass of water, or simply relax and clear your mind.",
      "5.Repeat: After the break, set the timer for another 25 minutes and repeat the process. After four Pomodoros, take a longer break of 15-30 minutes.                                 This is how to practice this technique originally but gievn our situation you get to choose the time limit you set for doing tasks and taking abreak keeping in my mind how much your boday is able to take in and can manage. Remember, the aim is bring some organisation in your focus, something which was always present but got railed off with the overwhelming nature of cancer. It's okay to start small and gradually work your way up. Each focused session is a step towards managing your mental load better.\"",
    ],
  },
  {
    Title: "Is this my life now? Medication, treatments and still pain?",
    "TEXT (RECORDED/ SCRIPT)": [
      'Imagine life as a journey on a winding road. Sometimes, the road is smooth and easy to navigate, while other times, it’s filled with bumps and obstacles. Right now, it feels like you’re on a particularly rough stretch of road, where every turn brings another challenge to overcome.                                                                                                                                                                                                                              When you wonder, "Is this my life now? Medication, treatments, and still pain?" it’s like standing at a crossroads, questioning the path your life has taken since your cancer diagnosis. This thought often arises from a sense of frustration and exhaustion from the constant cycle of treatments, medications, and the lingering presence of pain.',
      "It means you’re grappling with the reality of your new normal—a life filled with medical appointments, medications, and the uncertainty of how effective they will be in managing your symptoms. This thought can evoke feelings of sadness, anger, and even resignation, as you come to terms with the changes cancer has brought to your life.",
      "You might feel overwhelmed by the relentlessness of your treatment regimen and disheartened by the persistence of pain despite your efforts to manage it. It’s natural to question whether this is what your life will always be like now, and to mourn the loss of your pre-diagnosis sense of normalcy. I know I can't take the pain of these thoughts and feelings away from you but I can help ease how you are feeling by providing another perspective to approach this situation by helping you practice cognitive restructuring.",
    ],
    "TECHNIQUE/ FRAMEWORK": [
      '1. Identify Negative Thoughts: Start by recognizing and writing down the negative thoughts that arise when you think about your current situation. These might include thoughts like "My life will always be dominated by treatments and pain" or "I’ll never find relief from this pain."',
      "2.Challenge Negative Thoughts: Examine each negative thought and challenge its accuracy and helpfulness. Ask yourself questions like:",
      "Is there evidence to support this thought?",
      "Are there alternative explanations or perspectives?",
      "How helpful is this thought in improving my situation?",
      "3. Reframe Negative Thoughts: Replace negative thoughts with more balanced and realistic ones. For example:",
      'Original Thought: "My life will always be dominated by treatments and pain."',
      'Reframed Thought: "While treatments and pain are a significant part of my life right now, they are not the entirety of it. I have moments of joy, connection, and hope amidst the challenges."',
      "4. Practice Affirmations: Create positive affirmations or statements that counteract the negative thoughts you’ve identified. Repeat these affirmations regularly to reinforce a more positive mindset.                                                                                                                Therefore, the answer to your question is a no. It is a slow process but we know that healing is also a slow process and you will be free from this but right now, just focus on getting better and making healing your priority.",
    ],
  },
  {
    Title: "How do I explain what I'm feeling to my family and friends?",
    "TEXT (RECORDED/ SCRIPT)": [
      'I hope this lpractice now finds you in a moment of calm. I understand that you are struggling with the thought: "How can I explain my complex feelings to my friends and family?" This is a common and challenging concern for many facing a cancer diagnosis, and I want to offer some understanding and guidance to help you navigate through it.',
      "This thought likely stems from the profound changes and intense emotions you are experiencing. Cancer brings with it a whirlwind of feelings—fear, uncertainty, sadness, anger, and sometimes even guilt. It’s natural to want to share these feelings with the people closest to you, but finding the right words can be incredibly difficult.",
      "The primary emotion behind this thought is anxiety, mixed with fear of misunderstanding or burdening your loved ones. You might worry that they won't fully grasp what you're going through or that they might feel overwhelmed by the gravity of your emotions. There's also a desire for connection and understanding, which is vital during such a challenging time.",
      "These emotions can lead to a range of behaviors. You might find yourself avoiding conversations about your feelings, opting instead to keep things to yourself to protect your loved ones from worry. Alternatively, you might attempt to express your emotions but feel frustrated when words fall short or when you perceive that others don't fully understand your experience. This can lead to feelings of isolation and loneliness, even when surrounded by people who care about you.",
      "The impact on your treatment can be significant. Keeping your emotions bottled up can increase stress and anxiety, which can negatively affect your physical health and your body's ability to respond to treatment. Emotional isolation can also reduce your overall sense of well-being and support, which are crucial for resilience during treatment.",
      "The psychological concept behind this feeling is the need for emotional validation and connection. Human beings are inherently social creatures, and we thrive on understanding and being understood. When facing a crisis like cancer, this need becomes even more pronounced. The challenge lies in bridging the gap between your internal experience and external expression.",
      "Remember, your loved ones care deeply about you and want to support you. While they might not always know the right words or actions, their presence and willingness to listen are incredibly valuable.",
      "Here are the key principles you need for healthy communication:",
      "1. Right time and place: Find a quiet, comfortable setting to talk with your loved ones. Choose a time when you won't be rushed or interrupted, allowing for a calm and focused conversation.",
      "2. Honesty and trasnperance: Start the conversation with honesty. Let your loved ones know that you find it challenging to express your feelings but that you want to share your experience with them.",
      "3. Encourage questions: Invite your loved ones to ask questions. This can help them better understand your experience and feel more connected to you. It can often help you clarify your own self awareness as well.",
      "4. Small pieces: You don’t have to share everything at once. Break down your feelings into manageable pieces and share them over several conversations if needed.",
    ],
    "TECHNIQUE/ FRAMEWORK": [
      "Here I am going to walk you through the step by step of how do achieve the conversation you would like with your family and friends.",
      "Join me on this exercise with a journal/ notebook and a pen/ pencil. It aims to foster open communication, emotional expression, and deeper connections.",
      "1. Reflect on Your Feelings:",
      "What to do: Find a quiet, comfortable space where you can be alone with your thoughts. Take a few minutes to sit quietly and focus on your breathing. Once you feel calm, start reflecting on your feelings. Write down your thoughts in your journal. Consider questions like:",
      "What emotions am I experiencing right now?",
      "Why do I find it difficult to share these feelings with my family?",
      "What am I afraid might happen if I share my true feelings?",
      "Why it helps: Reflecting on your feelings helps you to understand them better and prepare for sharing them with others.",
      "2. Identify Specific Feelings:",
      "What to do: Using an emotion wheel (if available) or your own words, identify specific emotions you are experiencing. Write these emotions down in your journal. For example, you might feel sadness, anger, fear, or frustration.",
      "Why it helps: Identifying specific emotions makes it easier to articulate your feelings and helps you to understand the complexity of your emotional experience.",
      "3. Write a Letter to Your Family:",
      "What to do: Write a letter to your family expressing your true feelings. Be honest and open about what you are going through. Use the following prompts to guide you:",
      "Start by expressing your love and appreciation for your family.",
      "Describe what you are feeling and why.",
      "Explain how their support has impacted you.",
      "Share any specific fears or concerns you have.",
      "End with a request for understanding and support.",
      "Why it helps: Writing a letter allows you to organize your thoughts and express your feelings in a structured way without the immediate pressure of a face-to-face conversation.",
      "4. Practice Sharing Your Feelings:",
      "What to do: If you feel comfortable, read your letter out loud to yourself. You can also practice with a trusted friend, therapist, or support group. Pay attention to how it feels to speak your truth.",
      "Why it helps: Practicing helps build confidence and makes it easier to share your feelings when the time comes.",
      "5. Choose the Right Time and Place:",
      "What to do: Decide on a time and place to talk to your family when you won't be interrupted. Choose a setting where everyone feels comfortable and safe.",
      "Why it helps: A calm, private setting encourages open communication and reduces the likelihood of misunderstandings or distractions.",
      "6. Share Your Feelings:",
      'What to do: When you are ready, share your letter or speak from the heart. Use "I" statements to express your feelings without blaming or accusing others. For example, say "I feel scared about my treatment" instead of "You don\'t understand how scared I am."',
      'Why it helps: "I" statements promote non-confrontational communication and help others understand your perspective.',
      "7. Invite a Dialogue:",
      "What to do: After sharing your feelings, invite your family to respond. Ask them how they feel and encourage an open dialogue. Listen actively and empathetically to their responses.",
      "Why it helps: Inviting a dialogue fosters mutual understanding and strengthens your emotional connection with your family.",
      "8. Set Boundaries and Ask for Support:",
      "What to do: Clearly communicate any boundaries or specific support you need from your family. For example, you might ask for more help with daily tasks or request that they give you space when needed.",
      "Why it helps: Setting boundaries and asking for support helps your family understand how to best support you and ensures your needs are met.",
      "9. Reflect on the Conversation:",
      "What to do: After the conversation, take some time to reflect on how it went. Write about your experience in your journal. Consider questions like:",
      "How did it feel to share my feelings?",
      "How did my family respond?",
      "What went well, and what could have been better?",
      "Why it helps: Reflecting on the conversation helps you learn from the experience and prepare for future discussions.",
      "10. Practice Self-Compassion:",
      '- What to do: Throughout this process, be kind to yourself. Acknowledge that sharing your feelings is difficult and that it\'s okay to take small steps. Write self-compassionate statements in your journal, such as "It\'s brave to share my feelings" or "I am worthy of understanding and support."',
      "- Why it helps: Self-compassion reduces self-criticism and fosters a positive mindset, making it easier to continue being open and vulnerable.",
    ],
  },
];

// Function to process the input data and save as a new JSON file
function processAndSaveJson(inputData) {
  const output = input.map((item) => {
    return {
      kind: "GUIDE",
      slug: item.Title.toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9\s-]/g, ""),
      name: item.Title,
      version: 1,
      minAppVersion: "1.1.8",
      text: item.Title,
      image:
        "https://cdn.mindpeers.co/card-photos/guides/parents_not_proud.png",
      locked: false,
      background: {
        desktop: "",
        mobile: "",
      },
      bgm: {
        url: "",
        volume: 50,
      },
      filters: ["Guilt", "Anger", "Anxiety"],
      heading: "",
      share: {
        title: "",
        text: 'THIS guide on "{guide_name}"! This is exactly what we you and I both need for our never ending thoughts!',
        image: "",
        url: "https://bit.ly/35KvKVA",
      },
      contents: [
        {
          type: "INTRO_TEXT",
          topic: {
            text: "Ready? Let's do this!",
          },
          cards: [
            {
              type: "BUTTON",
              cta: {
                text: "START",
                deeplink: {
                  screen: "NEXT",
                  paramOne: null,
                  paramTwo: null,
                },
              },
            },
          ],
          is_active: true,
        },
        {
          type: "BREATHE",
          topic: {
            text: "Breathe Along",
            progress: {
              current: 1,
              total: 2,
            },
          },
          exercise: {
            type: "ANXIOUS",
            steps: [
              { type: "INHALE", seconds: 7000 },
              { type: "HOLD", seconds: 0 },
              { type: "EXHALE", seconds: 11000 },
              { type: "HOLD", seconds: 0 },
            ],
            times: 2,
          },
          is_active: true,
        },
        {
          type: "AUDIO_TEXT",
          topic: {
            text: item.Title,
            progress: {
              current: 1,
              total: 2,
            },
          },
          stories: [
            {
              audio: {
                url: "https://cdn.mindpeers.co/guides/parents_not_proud/audios/parents_not_proud_Para_1.m4a",
                thumbnail: {
                  desktop:
                    "https://cdn.mindpeers.co/guides/parents_not_proud/images/parents_not_proud_player_desk.png",
                  mobile:
                    "https://cdn.mindpeers.co/guides/parents_not_proud/images/parents_not_proud_player_mobile.png",
                },
                speaker: {
                  name: "Raasha",
                  image:
                    "https://cdn.mindpeers.co/site-icons/therapist-content-icons/raasha.png",
                },
              },
              captions: [item["TEXT (RECORDED/ SCRIPT)"]],
            },
            {
              audio: {
                url: "https://cdn.mindpeers.co/guides/parents_not_proud/audios/parents_not_proud_Para_2.m4a",
                thumbnail: {
                  desktop:
                    "https://cdn.mindpeers.co/guides/parents_not_proud/images/parents_not_proud_player_desk.png",
                  mobile:
                    "https://cdn.mindpeers.co/guides/parents_not_proud/images/parents_not_proud_player_mobile.png",
                },
                speaker: {
                  name: "Raasha",
                  image:
                    "https://cdn.mindpeers.co/site-icons/therapist-content-icons/raasha.png",
                },
              },
              captions: [item["TECHNIQUE/ FRAMEWORK"]],
            },
          ],
          is_active: true,
        },
        {
          type: "SUGGESTION_2",
          topic: {
            text: "Personalized chill pills",
          },
          cards: [
            {
              type: "SUGGESTION_THERAPIST",
              heading: "Speak to a professional and start therapy",
              image:
                "https://cdn.mindpeers.co/site-icons/new-guides/therapy.png",
              locked: false,
              cta: {
                deeplink: {
                  screen: "THERAPIST",
                },
              },
            },
            {
              type: "SUGGESTION_GAME",
              heading: "Release your anger on the moles",
              image:
                "https://cdn.mindpeers.co/site-icons/new-guides/games-guide.svg",
              locked: false,
              cta: {
                deeplink: {
                  screen: "GAME",
                  paramOne: "whack_a_mole",
                },
              },
            },
            {
              type: "SUGGESTION_JOURNAL",
              heading: "Journal your thoughts",
              image:
                "https://cdn.mindpeers.co/site-icons/new-guides/journal-guide.svg",
              locked: false,
              cta: {
                deeplink: {
                  screen: "JOURNAL",
                },
              },
            },
          ],
          on_action: {
            questions: [
              {
                type: "SLIDER_BETWEEN",
                heading: "How are you feeling now?",
                choices: [
                  { image: "", text: "Confused" },
                  { image: "", text: "Clear" },
                ],
              },
              {
                type: "INPUT",
                heading: "Do you feel closer to the resolution?",
              },
            ],
            cta: {
              text: "SUBMIT",
            },
          },
          fetch: {
            query: "",
          },
          submit: {
            query: "",
            variables: {},
          },
          is_active: true,
        },
      ],
    };
  });

  // Define the output file path
  const outputPath = path.join(__dirname, "output.json");

  // Write the output to a new JSON file
  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2), "utf-8");

  console.log(`New JSON file has been saved to ${outputPath}`);
}

// Run the function
processAndSaveJson(input);
