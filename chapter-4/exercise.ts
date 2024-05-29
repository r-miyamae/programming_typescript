// 1. TypeScriptは、関数の型シグネチャのうち、どの部分を推論するでしょうか？ パラメーターでしょ うか、戻り値の型でしょうか、それともその両方でしょうか？
// 両方


//  2. JavaScriptのargumentsオブジェクトは型安全でしょうか？ もしそうでないとすると、代わりに何 が使えるでしょうか？ 
// そうではない。レストパラメーターを使うことができる

// 3. すぐに出発する旅行を予約する機能が欲しいとします。オーバーロードされたreserve関数（「4.1.9 オーバーロードされた関数の型」を参照）を、3番目の呼び出しシグネチャを作成して書き換えてく ださい。このシグネチャは、目的地（destination）だけを取り、明示的な出発日（from）は取りま せん。この新しいオーバーロードされたシグネチャをサポートするように、reserveの実装を書き 換えてください。 
type Reservation = {
    from: Date
    to: Date
    destination: string
}

type Reserve = {
    (from: Date, to: Date, destination: string): Reservation 
    (from: Date, destination: string): Reservation
    (destination: string): Reservation
}

let reserve: Reserve = (
    fromOrDestination: Date | string,
    toOrDestination?: Date | string,
    destination?: string
) => {
    
}


// 4. ［難問］callの実装（「4.2.5.2 制限付きポリモーフィズムを使って、可変長引数をモデル化する」を 参照）を、
// 2番目の引数がstringである関数について「だけ」機能するように書き換えてください。 
// そうではない関数を渡すと、コンパイル時にエラーとなるようにします。 
function call <T extends [unknown, string, ...unknown[]], R> (
    f: (...args: T) => R,
    ...args: T
): R {
    return f(...args)
}

// 5. 型安全なアサーション関数、isを実装してください。型で概略を記述することから始めます。これ は、完成したら、次のように使えるものです。
function is <T, R>(first: T, second: T | R): boolean {
    return typeof first === typeof second && first === second

}
is("bya", "aa")