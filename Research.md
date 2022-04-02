1. Compiler and Interpreter
2. Interpreter
We use high-level language as we write a computer program. High-level language  is understandable by humans. This is called Source code.  Computer doesnt understand Source Code.  Compiler and Interpreter convert Source Code to Machine Code. JavaScript, Python Ruby use interpreters.  C, C++, Java use compiplers.
[Source:https://www.programiz.com/articledifference-compiler-interpreter]

3. Translators-convert high-level code to low-level machine code.
This contains: Compiler, Interpreter and Assemblers.

4. Assemblers- translate a program in written in assembly language into machine language. Assembly language is more often used with 8-bit processors. [https://www.microcontrollertips.com/compilers-translators-interpreters-assemblers-faq/]

5. Programmin paradigm-is an approach to solve problem using some programming language. There are 2 types of paradigm to solve problems: *Imperitive Programng Paradigm *Declarative Programing Paradigm.  [https://www.geeksforgeeks.org/introduction-of-programming-paradigms/]

6. Debugging-in computer programing is a multistep process that involves indentifying a problem, isolatin the source of the problem, find out a way to correct  problems or bugs. [https://searchsoftwarequality.techtarget.com/definition/debugging]

7. Boolean-is a data type has 2 values: true or false [https://www.computerhope.com/jargon/b/boolean.htm]

8. Cahr-is a data type which holds one character (letter, number, sign) of data.  A char takes a memory size of 1 byte.

9. Null-......

10. command-line interface-connects a user to a computer program or operating system.  Through the CLi, user interact with a system or application by typing in text [https://www.comms-express.com/infozone/article/command-line-interface/]

11. Low-level language- is a computer's native language. it deal with computer hardware compoonents. [https://www.javatpoint.com/what-is-a-low-level-language]

12.  High-level langauge is a programming language which is undersandable by Human.  This syntax is more cloce human language than low-level language. For example: C++, C#, Python etc.

13.Markup language-is a computer langauge that is human-readable. This language uses tags to define elements.Markup language contaien  standard words. Html and CML are popular markup language.


# Day15-16 [ 5-6 March 2022]

## JavaScript

### Hello World
 - 2 formada yazıla bilər. Ayrıca bir faylin içində bə ya Html in
 - Əgər yazacağımız js kodlari çoxdursa bunu ayrica bir faylda yazib import edirik, əgər azdirsa script taginda istifade ederek html daxilində yaziriqş
 - script tagi nin icində yazilmayan kodlari brauzer js kodu kimi tanimirş

 ### Code Structure
  - hansı statement əvvəl js ; olduğunu qəbul etmirsə o zaman ;(semiclon) istifadə edilir.
  - // əgər commenti  bir sətirdə yazacayıqsa forvard slash dan istifadə olunur. /* */ Əgər yazacağımız comment 2 və yadaha artıq əstri əhatə edəcəksə forvar slash və asterisk dən istifadə edirik.

  ### Variables
   - let və var  demək olarki eyni ifadələrdi, sadəcə olaraq varold schooda istifadə olunur.  Const sabit və dəyişməyən dəyərlər üçün istifadə olunur.
   - dəyişən təyin edrkən js də istifadə olunan ifadələrdən istifadə etmək olmaz, dəyişənin adı yığcam və readable  olmalıdı.
   - x dəyişəninə 2ci dəfə dəyər verdiyimiz zaman 1ci dəyər remove olur.

  ### Data types
   - 5.34 də 2li say sisteminə çevrilir və ona uyğun olaraq yaddada tutduğu yer hesablanır.
   - undefined,Nan, null un binary dəki qarşılıqlarına baxırıq. binary dəki qarşılıqları qədər yaddaşda yer tutur.
   - let a  stack yaddaşda yer tutur amma burda ona heç bir dəyişən vermədiyimiz üçün yaddaşda yer tutmayacaq.

  ### Type Conversion
   - Rəqəmlə yazilan məlumat növunu text kimi oxumaq lazimdirsə o zaman lazim olur.  Yəni hesablamanın yalnız nəticəsin deildə özünü görmək istədikdə cpnvert lazım olur.
   - 3 formada həyata keçirilir. String Conversion, Numeric Conversion, Boolean Conversion.

# DAy19 { 19 March 2022}

### Imperative and Declarative Approaching in programmin.
 - Proqramlaşdırma dilinin dizayn olunması dedikdə proqramlaşdırma dilinin yaradılmasını başa düşürəm. Proqramlaşdırma dilinin özüdə bir proqram olub hər hasısa bir proqramlaşdırma dilində yaradılır. Proqrmalaşdırma dili yaratmaq üçün biz əvvəlcədən bir plan qurmalıyıq. Biz birinci dəyişənləri, funksiyaları, keyword  təyin etməliyik.Proqramlaşdırma dilinin sintaksis ardıcılığını müəyyənləşdirməliyik. Lexing qurmalayıqki yazdığımız  sintaksisi  tokenlere çevirə bilsin yəni proqramlaşdırma dili strings, number, operators, variables arasindaki fərqi ayırd eəd bilməlidir. Sonraki mərhələdə biz parsing yaratmalıyıq. Parser tokenleri  bir-birine bağlı struktur halına gətirir.  Yazılmış kod bir birine bağlı struktura halına gəldikdən sonra yazılmış kodu run etmək asan olur.
 Biz yazdığımız proqramlaşdırma dilinə əvvəlcədən grammatik qaydalar təyin etməliyik ki, prqram istifadə olunan zaman error ortaya çıxarsa bunun səbəbin tapmaq asan olsun.
 SOURCE:https://www.freecodecamp.org/news/the-programming-language-pipeline-91d3f449c919/

 - İmperative approach:Mən online bir məhsul sifariş         edirəm və məhsulun hansı ünvana, nə vaxt çatdırılacağını və ünvanı və unvana hansı yola gəlməli olduqlarını yazıram.
   Declarative approach--Mən məhsul sifariş edirəm və məshulu unvana çatdırmalı olduqlarını qeyd edirəm.

 - Funksiyalar da deklarativ yanasmadan istifadə edir. Funksilarda işin necə yerinə yetiriləcəyi deil nə yerinə yetiriləcəyi yazılır.

  https://medium.com/frontend-development-with-js/imperative-declarative-programlama-242e3dce26e


  ### Function in Javascript
   - Function declaration 3 formada yazılır:
      1.1 Regular function--Bir dəfə function yazirsan və onu lazım olduqca müxtəlif yerlərdə çağıra bilirsən
        function sum(a,b) {
          return a + b;
        }
      1.2 Function expression--Js bəyanatı "function" açar sözü ilə başlamır. "const" sözü ilə başlayır və ya () ("Hello") bu formatda yazılır.
       const isTruthy = function(value) {
         return !!value;
       }
       (function messageFunction(message) {
         return message + "World"
       })
      1.3 Functional declaration in conditional-- burda Function mötərizə içərisində yazılır.  Mötərizə içərisində yazılan Function kənarda çağıranda Erorr yaranır.
      https://dmitripavlutin.com/6-ways-to-declare-javascript-functions/#2functionexpression

   - Fərqli formada təyin olunan functionlar layihənin yazılışında function ların  bir və ya çox yerdə yazılacağında asılı olaraq fərqli formada yazılırş Əgər bir funksiyanı bir çox yerdə istifadə edəcəyiksə "function sum()" formada yazılır. Yazacağımız funksiya bir yerdə istifadə olunacaq "const" sözü ilə yazırıq.

   - Global scope yazdığıımız variable ları functionın daxilindədə istifadə edə bilərik. Local scope da yazdığımız variable ları {} mötərizədən kənarda istifadə edə bilmirik. Local scope da  əvvəlcədən yazılmış variable ı yenidən təyin edə bilirik.

   - Function's name  take a memory in stack "getowner" but "function features" take a memory in heap "function getowner() { let userName = Rovshan; console.log(userName)}
    https://felixgerschau.com/javascript-memory-management/#memory-life-cycle


  ### Növbəti dərsin mövzuları
   - Allocate memory-İt allocte the memory for object we creat.
   - Use memory-reading and writining objects in memory.
   - Release memory-this step is controled by Javascript. When allocated memory is released, I will able to use other functions.

   - Static allocation vs dynamic allocation: In advance  Javascript allocate fixed memory for primitive values(strings,number, undefiend and null) and references. Engine know size at compile time. Allocate memory before exucition will named "static memory allocation. Dynamic allocation is that engine doesn't allocate fixed memory for objects.  Space will allocated to appropriate size of objects or function.
   https://felixgerschau.com/javascript-memory-management/#memory-life-cycle

   - Garbage collector-when JavaScript engine reveal that variable or function is not used, it will released the ocuppied memory.

   - Function and variables are stored memory for exucition context before we run the code. This is called "hosting".

   - Scopa chain-we declare functions, variables inside the scope.  there are 3 tree types of scope: global scope, block scope, function scope.



   # Day20-21 [ 26-27 March 2022]

   ## Javascript Function

   ### what is "void" and return function?*
   - If we write “return” keyword in  function we call this *return function*, or not we call this *Void function*

   ### return keyword-unun var olma məqsədi nədir?
   - Return keywordu  funksiyanin return (çevirdiyi, qaytardıği) dəyərini müəyyən edir.Əgər return olunan funksiyada return ifadəsini  yazmasaq cavab undifined olacaq, çunki function scope da hesablanan dəyər global scope da oxuna bilməyəcək.

  ## Scope

   - block scope--təyin edilmis dəyisənin qarsindaki acar söz curly brace nin içərisindən kənarda oxuna bilirsə bu block scope adlanir.
   - function scope--açar söz curly brace dən kənarda oxuna bilmirsə bu function scope adlanır.
   - globe scope--təyin edilmiş dəyişənin qarşısında açar söz yoxdursa bu global scope adlanır.






