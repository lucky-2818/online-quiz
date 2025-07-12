#include <iostream>
using namespace std;

struct Question {
    string text;
    string options[4];
    int answer;
};

int main() {
    Question quiz[2] = {
        {"Which language is used for styling web pages?", {"HTML", "JQuery", "CSS", "XML"}, 2},
        {"Which company developed JavaScript?", {"Netscape", "Microsoft", "Google", "Apple"}, 0}
    };

    int score = 0;
    int userAnswer;

    for (int i = 0; i < 2; i++) {
        cout << quiz[i].text << endl;
        for (int j = 0; j < 4; j++) {
            cout << j+1 << ". " << quiz[i].options[j] << endl;
        }
        cout << "Enter your answer (1-4): ";
        cin >> userAnswer;
        if (userAnswer - 1 == quiz[i].answer) {
            score++;
        }
    }

    cout << "Your score: " << score << "/" << 2 << endl;

    return 0;
}