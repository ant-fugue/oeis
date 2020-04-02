; how to load another program file?
;(call-with-input-file "/Users/matsudashouhei/QueenLang/Language/QueenScheme/QueenScheme.rkt")

(load "/Users/matsudashouhei/QueenLang/Language/QueenScheme/QueenScheme.rkt")

;;; A000058 Sylvester's sequence
(define (++ i) (+ i 1))
(define (-- i) (- i 1))
(define (square n) (expt 2 n))

(define (product initial final body)
  (if (> initial final)
      1
      (* (body initial)
         (product (++ initial) final body))))

(define (prod final) (product 1 final +))

(define (sylvester n)
  (+ 1 (prod n)))

(define (sylvester n)
  (if (zero? n)
      2
      (+ 1 (product 0 (-- n) (sylvester (-- n))))))


(define (fact n)
  (if (zero? n)
      1
      (* n (fact (- n 1)))))

(define (fib n)
  (cond ((= 0 n) 1)
        ((= 1 n) 1)
        (else (+ (fib (- n 1)) (fib (- n 2))))))

(define (iota min max)
  (let loop ((i max) (tmp '()))
    (if (< i min)
        tmp
        (loop (- i 1) (cons i tmp)))))

; ppowerful sequences

(define (prime? n)
  (define (search n)
    (let loop ((i 2))
      (if (zero? (modulo n i))
          i
          (loop (+ i 1)))))
  (if (= n 1)
      '#f
      (= n (search n))))

(define filter
  (lambda (predi lst)
    (cond ((null? lst) '())
          ((predi (car lst))
           (cons (car lst)
                 (filter predi (cdr lst))))
          (else  (filter predi (cdr lst))))))

(define remove
  (lambda (predi lst)
    (cond ((null? lst) '())
          ((predi (car lst))
           (remove predi (cdr lst)))
          (else (cons (car lst)
                      (remove predi (cdr lst)))))))

(define (sieve n)
  (map (lambda (x) (if (prime? x) x 0)) (iota 2 n)))

(define (primes n)
  (filter positive? (sieve n)))

; wrong in interpretation of powerful numbers. 1 must be included in this sequence.
(define (powerful? n)
  (define (sq x) (* x x))
    (let loop ((i 2) (p (primes n)))
      (cond ((null? p) #f)
            ((< n (sq i)) #f)
            ((and (zero? (modulo n (car p))) (zero? (modulo n (sq (car p))))) #t)
            (else (loop (+ i 1) (cdr p))))))

(define (p-sieve n)
  (map (lambda (x) (if (powerful? x) x 0)) (iota 2 n)))

(define (powerful-numbers n)
  (filter positive? (p-sieve n)))

(define (factors-of n)
  (let loop ((i 1) (tmp '()))
    (cond ((< n i) (reverse tmp))
          ((zero? (modulo n i)) (loop (+ i 1) (cons i tmp)))
          (else (loop (+ i 1) tmp)))))

(define (member? obj lst)
  (cond ((null? lst) #f)
        ((= obj (car lst)) #t)
        (else (member? obj (cdr lst)))))


      










