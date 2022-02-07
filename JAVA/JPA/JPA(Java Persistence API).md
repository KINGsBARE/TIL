# JPA 소개
개발자들이 어떻게하면 관계형 데이터베이스를 이용하는 프로젝트에서 객체지향프로그래밍을 할 수 있을
지의 고민에서 해결책으로 JAP라는 자바 표준 ORM(object Relation Mapping) 기술을 만나게 되었다.
<br>
<br>

>* 참고 MyBatis,iBatis 는 ORM이 아니고 SQL Mapper다
<br>ORM은 객체를 맵핑,
SQL Mapper는 쿼리를 맵핑한다.

<br>
<br>

# JPA(Java Persistence API)

JPA는 웹 애플리케이션 개발이 점점 데이터 베이스 모델링에 집중되는 문제점을 해결하기 위해 등장했다.<br>
<br>
즉, 서로 지향하는 바가 다른 RBD와OOP를 중간에서 패러다임을 일치 시켜주기 위한 기술이고,
개발자는 객체지향적으로 프로그래밍을 하고 JPA가 이를 관계형데이터베이스에 맞게 SQL을 대신 생성해서 실행한다. <br>
따라서 JPA덕에 개발자가 더는 SQL에 종속적인 개발을 하지 않게 된다.
<br>
<br>
## 패러다임 불일치 문제<br>
**RDB(관계형데이터베이스)** 의 페러다임은 **어떻게 데이터를 저장할지에 초점을 맞춘 기술**<br>
**객채지향 프로그래밍 언어**의 페러다임은 **기능과 속성을 한 곳에서 관리하는 기술**

- ### 패러다임 불일치란?
  웹 애플리케이션에느 RDB가 빠질수 없는 요소인데 위 처럼 에초에 다른것에 초점을 맞추어 만들어진
것들 이기때문에 두가지를 합치기에는 여러문제가 생긴다. 이를 패러다임 불일치 라고 한다.

<br>

## 장점
객체 중심으로 개발을 해 생산성 향상, 유지보수 수월해진다.<br>
이런 점 때문에 규모가 크고 ,대규모 트래픽과 데이터를 가진 서비스는 JPA를 많이 사용하고 있다.