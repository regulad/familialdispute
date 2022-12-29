/**
 * An answer to a question
 */
export type Answer = {
    // This is the answer that will be displayed on the board.
    answer: string;
    // This is the number of points that the answer is worth. In Family Feud, it's derived from the number of people who answered the question with this answer.
    numberOfAgreements: number;
    // These are similar answers that may match. This doesn't include the answer, that will be checked separately.
    similarAnswers: string[];
}

/**
 * A question that may be asked in the game.
 */
export type Question = {
    // The question that is asked.
    question: string;
    // The answers for the questions
    answers: Answer[];
}

/**
 * A game of Familial Dispute that can be played.
 */
export type Feud = {
    // A name game, like "Computer Science Family Feud".
    gameName: string;
    // The author, like "John Doe".
    author?: string;
    // The family who sits on the left side.
    familyLeft: string;
    // The family who sits on the right side.
    familyRight: string;
    // The questions that are asked in the game. They are in order.
    questions: Question[];
}

export function checkGame(game: Feud): boolean {
    throw new Error("Encoded wrong!");
}
